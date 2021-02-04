import React, { useState, useReducer } from "react";
import Cell from "../Cell";
import { reducer } from "../reducer";
import { makeGlobal, downLoad_notebook, load_notebook } from "../utils";
import Header from "../components/header/header";

const defaultState = {
  cells: [{ id: "cell_1", input: "", output: "", type: "code" }],
};

export default function Demo() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [currentCell, setCurrentCell] = useState(null);

  makeGlobal();
  const load = () => load_notebook(dispatch);
  const download = () => downLoad_notebook(state);
  return (
    <div>
      <Header download={download} load={load} />
      {state.cells.map((cell, index) => {
        return (
          <Cell
            key={cell.id}
            cell={cell}
            dispatch={dispatch}
            currentCell={currentCell}
            setCurrentCell={setCurrentCell}
            cellId={index + 1}
          />
        );
      })}
    </div>
  );
}
