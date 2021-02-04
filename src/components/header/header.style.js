/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const NoteEditContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NoteTitle = styled.input`
  background: transparent;
  text-align: center;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  height: 40px;
  box-shadow: 0px 1px 1px 1px rgb(231, 231, 231);
  width: 150px;
`;

export const DownloadNoteBook = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 1px 1px rgb(231, 231, 231);
  min-width: 100px;
  font-size: 14px;
  height: 40px;
  background: #ffdf28;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 20px;
`;

export const AddNoteInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const AddNoteLabel = styled.label`
  cursor: pointer;
  margin-left: 5px;
`;
