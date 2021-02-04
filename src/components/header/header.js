import React from "react";
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
  return (
    <HeaderContainer>
      <div></div>
      <NoteEditContainer>
        <NoteTitle type="text" value="untitled.ipynb" />
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
            onChange={() => load()}
          />
        </div>
      </NoteEditContainer>
      <DownloadNoteBook onClick={() => download()}>
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
