/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const CellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  width: 100%;
`;

export const RunContainer = styled.div`
  width: 5%;
  cursor: pointer;
  margin-top: 5%;
`;

export const CellBodyContainer = styled.div`
  width: 100%;
`;

export const AddCellButton = styled.button`
  background: transparent;
  border: 1px solid rgb(179, 179, 179);
  color: rgb(179, 179, 179);
  font-size: 14px;
  width: 130px;
  height: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CellHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OtherCellButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 37px;
`;

export const CellButton = styled.button`
  background: transparent;
  border: 1px solid #aeaeae;
  color: #636363;
  font-size: 16px;
  max-width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  cursor: pointer;
`;

export const CellTextArea = styled.textarea`
  width: 100%;
  min-height: 7vh;
  border: 1px solid #e5e1db;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const Output = styled.div`
  padding: 10px;
  background: #2e2e2e;
  border: none;
  margin-top: 10px;
  color: white;
  width: 93.6%;
`;
