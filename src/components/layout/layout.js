/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Layout } from "./layout.style";

export default function layout(props) {
  return <Layout>{props.children}</Layout>;
}
