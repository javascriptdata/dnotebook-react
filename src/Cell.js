/* eslint-disable eqeqeq */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";
import CodeMirror from "react-codemirror";
import { Remarkable } from "remarkable";
import { CgMathPlus, CgArrowUp, CgArrowDown, CgTrash } from "react-icons/cg";
import { BsFillCaretRightFill } from "react-icons/bs";
import {
  AddCellButton,
  CellButton,
  CellHead,
  OtherCellButtonWrapper,
  Output,
  CellContainer,
  RunContainer,
  CellBodyContainer,
} from "./Cell.style";
import roll from "./static/rolling.svg";

require("codemirror/lib/codemirror.css");
require("codemirror/mode/javascript/javascript");
require("codemirror/theme/yeti.css");
require("codemirror/addon/edit/closebrackets");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/hint/javascript-hint");
require("codemirror/addon/hint/show-hint");

export default function Cell({
  cell,
  dispatch,
  currentCell,
  setCurrentCell,
  cellId,
  activeCell,
  setActiveCell,
}) {
  const cellOutputId = `out_${cellId}`;
  const refCode = useRef(null);
  const refOutput = useRef("");
  useEffect(() => {}, [cellId, currentCell]);
  // eslint-disable-next-line consistent-return
  const getCode = async () => {
    window.current_cell = cellId;
    if (cell.type === "code") {
      const input = refCode.current.getCodeMirror().getValue();
      try {
        // eslint-disable-next-line no-eval
        let output = ("global", eval)(input) || "";
        if (Array.isArray(output)) {
          output = window.print_val(output);
        } else if (typeof output === "object" && output !== null) {
          output = JSON.stringify(output);
          if (output === "{}") {
            output = "";
          }
        } else if (input.includes("console.log(")) {
          // retreive value from the console function
          console.oldLog = console.log;
          console.log = function (value) {
            return value;
          };
          // eslint-disable-next-line no-eval
          output = eval(input);
          if (Array.isArray(output)) {
            output = window.print_val(output);
          } else if (typeof output === "object" && output !== null) {
            output = JSON.stringify(output);
            if (output === "{}") {
              output = "";
            }
          }
        } else if (input.includes("plot") || input.includes("console.for")) {
          return document.getElementById(`out_${currentCell}`);
        }
        // eslint-disable-next-line no-eval
        const cellstate = { ...cell, input, output };
        dispatch({ type: "CHANGE_CELL", payload: cellstate });
      } catch (error) {
        const cellstate = { ...cell, input, output: error };
        dispatch({ type: "CHANGE_CELL", payload: cellstate });
      }
    } else {
      const cellstate = { ...cell, input: refCode.current.value };
      // eslint-disable-next-line no-use-before-define
      showOutput();
      dispatch({ type: "CHANGE_CELL", payload: cellstate });
    }
  };

  const setId = (id) => {
    setCurrentCell(id);
  };

  useEffect(() => {
    if (cell.type === "text") {
      refCode.current.value = cell.input;
      const md = new Remarkable();
      refOutput.current.innerHTML = md.render(cell.input);
      refCode.current.style.display = cell.input ? "none" : "block";
    } else {
      refCode.current.getCodeMirror().setValue(cell.input);
      refOutput.current.innerHTML = cell.output;
    }
    // eslint-disable-next-line radix
    const id = parseInt(cell.id.split("_")[1]);
    setId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cell]);

  const upCell = (type) => {
    const id = cellId - 1;
    // eslint-disable-next-line no-use-before-define
    newCell(id, type);
  };

  const downCell = (type) => {
    const id = cellId;
    // eslint-disable-next-line no-use-before-define
    newCell(id, type);
  };

  const newCell = (id, type) => {
    // eslint-disable-next-line no-shadow
    const newCell = {
      input: "",
    };

    if (type === "text") {
      newCell.type = "text";
    } else {
      newCell.output = "";
      newCell.type = "code";
    }
    setCurrentCell(currentCell + 1);

    dispatch({ type: "ADD_CELL", payload: newCell, currentId: id });
  };

  const disableOutput = () => {
    if (cell.type === "text") {
      refOutput.current.style.display = "none";
      refCode.current.style.display = "block";
    }
  };

  const showOutput = () => {
    if (cell.type === "text") {
      refOutput.current.style.display = "block";
      refOutput.current.style.background = "white";
      refOutput.current.style.color = "black";
      refCode.current.style.display = "none";
    }
  };

  const deleteCell = () => {
    dispatch({ type: "DELETE_CELL", payload: cell.id });
  };
  return (
    <div style={{ paddingBottom: "30px" }}>
      <CellContainer>
        <RunContainer>
          {cellId == activeCell ? (
            <div
              onClick={() => {
                getCode();
              }}
            >
              <BsFillCaretRightFill id="play" color="#FFDF28" fontSize="30px" />
              <img
                id="activity-loader"
                style={{ display: "none" }}
                width="30px"
                src={roll}
                alt="running-cell"
              />
            </div>
          ) : (
            <div>[{cellId}]:</div>
          )}
        </RunContainer>
        <CellBodyContainer>
          <CellHead>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AddCellButton
                onClick={() => {
                  downCell("code");
                }}
              >
                <CgMathPlus
                  style={{
                    fontSize: "16px",
                    color: "rgb(179, 179, 179)",
                  }}
                />
                Code
              </AddCellButton>
              <AddCellButton
                onClick={() => {
                  upCell("text");
                }}
                style={{
                  marginLeft: "10px",
                }}
              >
                <CgMathPlus
                  style={{
                    fontSize: "16px",
                    color: "rgb(179, 179, 179)",
                  }}
                />
                Text
              </AddCellButton>
            </div>
            {cellId === activeCell ? (
              <OtherCellButtonWrapper>
                <CellButton
                  onClick={() => {
                    upCell("code");
                  }}
                >
                  <div>
                    {" "}
                    <CgArrowUp />
                  </div>
                </CellButton>
                <CellButton
                  onClick={() => {
                    downCell("text");
                  }}
                >
                  <div>
                    <CgArrowDown />
                  </div>
                </CellButton>
                <CellButton
                  onClick={() => {
                    deleteCell();
                  }}
                >
                  <div>
                    <CgTrash />
                  </div>
                </CellButton>
              </OtherCellButtonWrapper>
            ) : (
              <div></div>
            )}
          </CellHead>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            {cell.type === "code" ? (
              <CodeMirror
                onFocusChange={() => {
                  console.log(activeCell);
                  setActiveCell(cellId);
                }}
                value={cell.input}
                ref={refCode}
                options={{
                  mode: "javascript",
                  extraKeys: { "Ctrl-Space": "autocomplete" },
                  autoCloseBrackets: true,
                  matchBrackets: true,
                  lineNumbers: true,
                  tabSize: 4,
                  theme: "yeti",
                  autocorrect: true,
                }}
              />
            ) : (
              <TextCell
                selectCell={() => setActiveCell(cellId)}
                refText={refCode}
              />
            )}
          </div>
        </CellBodyContainer>
      </CellContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Output
          ref={refOutput}
          onClick={() => {
            disableOutput();
          }}
          id={cellOutputId}
        ></Output>
      </div>
    </div>
  );
}

function TextCell({ refText, selectCell }) {
  return (
    <TextareaAutosize onFocus={selectCell} ref={refText}></TextareaAutosize>
  );
}

TextCell.propTypes = {
  refText: PropTypes.object,
  id: PropTypes.string,
};
