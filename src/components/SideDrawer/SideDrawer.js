/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavLink } from "react-router-dom";
import {
  DrawerBg,
  DrawerWrapper,
  DrawerLinksList,
  DrawerLinkItem,
} from "./SideDrawer.style";

export default function SideDrawer() {
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
    <DrawerBg>
      <DrawerWrapper>
        <DrawerLinksList>
          {links.map((item, idx) => (
            <DrawerLinkItem key={`NavLink${idx}`}>
              {item.link.includes(":") ? (
                <a href={item.link}>{item.title}</a>
              ) : (
                <NavLink to={item.link}>{item.title}</NavLink>
              )}
            </DrawerLinkItem>
          ))}
        </DrawerLinksList>
      </DrawerWrapper>
    </DrawerBg>
  );
}
