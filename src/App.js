import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Workterm, NavBar } from "./components";
import "./assets/App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ marginTop: "12vmin" }}>
        <Switch>
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
