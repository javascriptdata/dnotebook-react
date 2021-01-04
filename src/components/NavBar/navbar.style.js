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

  @media only screen and (max-width: 768px) {
    display: none;
  }

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

export const Line = styled.div`
  background-color: #fff;
  width: 1.7rem;
  height: 0.2rem;
  border-radius: 1rem;
  position: relative;
  transition: all 0.2s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 1.7rem;
    height: 0.2rem;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }
`;

export const Hamburger = styled.div`
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 1.5rem;
  transition: 0.2s;

  ${({ openDrawer }) =>
    openDrawer &&
    `
  & > div {
      background-color: #2e2e2e;
      &::before {
        transform: translateY(0px) rotate(45deg);
      }
      &::after {
        transform: translateY(0px) rotate(-45deg);
      }
    }
  `}

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;
