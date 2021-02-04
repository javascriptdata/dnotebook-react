/* eslint-disable camelcase */
// import './App.css';
import React from "react";
import Layout from "./components/layout/layout";
import NavBar from "./components/NavBar/navbar";
import Routes from "./routes/routes";

function App() {
  return (
    <div>
      <NavBar />
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
