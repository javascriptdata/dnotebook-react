import React from "react";
import { Route, Switch } from "react-router-dom";
import Demo from "../pages/demo";

export default function Routes() {
  return (
    <Switch>
      <Route exact component={Demo} path="/demo" />
    </Switch>
  );
}
