import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { MenuProvider } from "./context/MenuContext";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { MasterProvider } from "./context/MasterContext";

ReactDOM.render(
  <UserProvider>
    <MenuProvider>
      <MasterProvider>
        <Router>
          <App />
        </Router>
      </MasterProvider>
    </MenuProvider>
  </UserProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
