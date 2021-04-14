import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import { CgSoftwareDownload, CgMathPlus } from "react-icons/cg";
import {
  HeaderContainer,
  NoteEditContainer,
  NoteTitle,
  DownloadNoteBook,
  AddNoteInput,
  AddNoteLabel,
} from "./header.style";

export default function Header({ download, load }) {
  const [noteName, setNoteName] = useState("untitled.json");
  const onNoteTitleChange = (e) => {
    setNoteName(e);
  };
  return (
    <HeaderContainer>
      <div></div>
      <NoteEditContainer>
        <NoteTitle
          onChange={(e) => onNoteTitleChange(e.target.value)}
          type="text"
          value={noteName}
        />
        <div>
          <AddNoteLabel htmlFor="import-notebook-file">
            {" "}
            <CgMathPlus
              style={{
                fontSize: "24px",
              }}
            />
          </AddNoteLabel>
          <AddNoteInput
            type="file"
            id="import-notebook-file"
            onChange={() => {
              const fileName = load();
              const name = `${fileName.split(".")[0]}.ipynb`;
              onNoteTitleChange(name);
            }}
          />
        </div>
      </NoteEditContainer>
      <DownloadNoteBook onClick={() => download(noteName)}>
        {" "}
        <CgSoftwareDownload
          style={{
            fontSize: "20px",
          }}
        />{" "}
        Download Notebook
      </DownloadNoteBook>
    </HeaderContainer>
  );
}

Header.propTypes = {
  load: PropTypes.func.isRequired,
  download: PropTypes.func.isRequired,
};
