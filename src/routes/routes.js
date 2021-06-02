import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Demo = lazy(() => import("../pages/demo/demo"));
const About = lazy(() => import("../pages/about/about"));
const Home = lazy(() => import("../pages/home/home"));

export default function Routes() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Demo} path="/demo" />
        <Route exact component={About} path="/about" />
      </Switch>
    </Suspense>
  );
}
