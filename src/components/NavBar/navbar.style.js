/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const NavBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2e2e2e;
  width: initial;
  box-shadow: 0px 2px 1px #ffdf28;
  margin: 0;
  margin-bottom: 1.5rem;
  padding: 1rem;
  height: max-content;
`;

export const NavWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const NavLinksList = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  width: 30rem;

  a {
    color: #fff;
    transition: 0.2s;
    &:hover {
      color: #ffdf28;
    }
  }
`;

export const NavLinkItem = styled.li`
  text-decoration: none;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Logo = styled.h2`
  width: fit-content;
  padding: 0;
  margin: 0;

  a {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
  }
`;
