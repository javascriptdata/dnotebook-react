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
  background: #fafafa;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  width: 160px;
  height: 47px;
`;

export const DownloadNoteBook = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffdf28;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  font-size: 15px;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  width: 185px;
  height: 47px;
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
