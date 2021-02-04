/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideDrawer from "../SideDrawer/SideDrawer";
import {
  NavBg,
  NavWrapper,
  Logo,
  NavLinksList,
  NavLinkItem,
  Hamburger,
  Line,
} from "./navbar.style";
import logo from "../../static/logo.svg";

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

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer(() => !openDrawer);
  };

  return (
    <>
      <NavBg>
        <NavWrapper>
          <Logo>
            <NavLink
              style={{
                display: "flex",
                alignItems: "center",
              }}
              to="/"
            >
              <img
                style={{
                  borderRadius: "5px",
                }}
                width="35px"
                src={logo}
                alt="dnotebook-logo"
              />{" "}
              <span style={{ marginLeft: "10px" }}>notebook</span>
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

          <Hamburger onClick={handleDrawer} openDrawer={openDrawer}>
            <Line />
          </Hamburger>
        </NavWrapper>
      </NavBg>
      {openDrawer && <SideDrawer />}
    </>
  );
}
