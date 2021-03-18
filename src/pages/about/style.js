/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: #2e2e2e;
  @media (max-width: 992px) {
    font-size: 28px;
  }
`;

export const Summary = styled.p`
  font-size: 18px;
  color: #2e2e2e;
`;

export const UseCases = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Case = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  background: #ffffff;
  box-shadow: 2px 2px 1px #ffdf28;
  border-radius: 5px;
  @media (min-width: 992px) {
    width: 49%;
  }
`;

export const CaseHead = styled.h6`
  font-weight: bold;
  font-size: 18px;
  margin: 0px;
  color: #2e2e2e;
`;

export const CaseSummary = styled(Summary)`
  font-size: 16px;
  padding: 10px;
`;
