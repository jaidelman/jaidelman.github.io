import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Home, Workterm, NavBar, Contact } from "./components";
import "./assets/App.css";

function App() {
  return (
    <HashRouter basename="/">
      <NavBar />
      <div className="app">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/revyoome">
          <Workterm company="revyoome" />
        </Route>
        <Route path="/tekside">
          <Workterm company="tekside" />
        </Route>
        <Route path="/wsib">
          <Workterm company="wsib" />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </HashRouter>
  );
}

export default App;
