/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const DrawerBg = styled.div`
  @-webkit-keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: transparent;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100vh;
  margin-top: -1.5rem;
  position: absolute;
  z-index: 99;
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const DrawerWrapper = styled.div`
  width: 40vw;
  min-width: 12rem;
  background: #2e2e2e;
  height: 100vh;
  max-width: 250px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DrawerLinksList = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 1rem;

  a {
    color: #fff;
    transition: 0.2s;
    &:hover {
      color: #ffdf28;
    }
  }
`;

export const DrawerLinkItem = styled.li`
  text-decoration: none;
  margin: 1rem;

  a {
    text-decoration: none;
    color: #fff;
  }
`;
