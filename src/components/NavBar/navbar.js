/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
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

export default function NavBar() {
  const history = useHistory();
  const { pathname } = history.location;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active, setActive] = useState("/getting-started");

  const handleDrawer = () => {
    setOpenDrawer(() => !openDrawer);
  };
  useEffect(() => {
    if (pathname.includes("getting-started" || pathname === "/")) {
      setActive("/getting-started");
    }
    if (pathname.includes("demo")) {
      setActive("/demo");
    }
    if (pathname.includes("about")) {
      setActive("/about");
    }
  }, [pathname]);
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
                  <NavLink onClick={() => setActive(item.link)} to={item.link}>
                    {active === item.link ? (
                      <div
                        style={{
                          color: " #ffdf28",
                        }}
                      >
                        {item.title}
                      </div>
                    ) : (
                      <div>{item.title}</div>
                    )}
                  </NavLink>
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
