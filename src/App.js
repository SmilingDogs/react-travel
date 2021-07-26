import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Watch from "./components/Watch/Watch";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  const {pathname} = useLocation()

  return (
    <>
      {pathname === "/watch" ? <Watch /> : <Navbar />}
      <Switch>
      {publicRoutes.map(({ path, name, Component }) => (
        <Route key={name} path={path} component={Component} exact />
      ))}
      </Switch>
    </>
  );
}

export default App;
