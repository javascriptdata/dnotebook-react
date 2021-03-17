import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Demo = lazy(() => import("../pages/demo/demo"));
const About = lazy(() => import("../pages/about/about"));

export default function Routes() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <Route exact component={Demo} path="/demo" />
        <Route exact component={About} path="/about" />
      </Switch>
    </Suspense>
  );
}
