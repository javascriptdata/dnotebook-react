/* eslint-disable camelcase */
// import './App.css';
import React from "react";
import Layout from "./components/layout/layout";
import NavBar from "./components/NavBar/navbar";
import Routes from "./routes/routes";

function App() {
  return (
    <Layout>
      <NavBar />
      <Routes />
    </Layout>
  );
}

export default App;
