import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import { UserProvider } from "./context/UserContext";
import { MenuProvider } from "./context/MenuContext";
import * as serviceWorker from "./serviceWorker";
import { MasterProvider } from "./context/MasterContext";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <UserProvider>
    <MenuProvider>
      <MasterProvider>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
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
