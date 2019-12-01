import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/main/Main";

import "./App.css";

const App = () => (
  <div className="container">
    <Route path="/" component={Main} />
  </div>
);

export default App;
