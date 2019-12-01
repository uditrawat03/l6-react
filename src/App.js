import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/main/Main";

import "./App.css";

const App = () => (
  <div className="ui justified container">
    <Route component={Main} />
  </div>
);

export default App;
