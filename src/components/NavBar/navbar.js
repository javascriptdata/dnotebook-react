/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavBg,
  NavWrapper,
  Logo,
  NavLinksList,
  NavLinkItem,
} from "./navbar.style";

export default function NavBar() {
  const links = [
    {
      title: "Getting Started",
      link: "/getting-started",
    },
    {
      title: "Demo",
      link: "/demo",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Github",
      link: "https://github.com/opensource9ja/dnotebook-react",
    },
  ];

  return (
    <NavBg>
      <NavWrapper>
        <Logo>
          <NavLink to="/">
            <img src={""} alt="" /> D notebook
          </NavLink>
        </Logo>
        <NavLinksList>
          {links.map((item, idx) => (
            <NavLinkItem key={`NavLink${idx}`}>
              {item.link.includes(":") ? (
                <a href={item.link}>{item.title}</a>
              ) : (
                <NavLink to={item.link}>{item.title}</NavLink>
              )}
            </NavLinkItem>
          ))}
        </NavLinksList>
      </NavWrapper>
    </NavBg>
  );
}
