import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components";
import "./assets/App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
