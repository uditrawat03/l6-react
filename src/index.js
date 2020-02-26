import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import { userLoggedIn } from "./actions/Auth";
import store from "./store/store";

if (localStorage.authJWT) {
  const user = { token: localStorage.authJWT };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// React contaxt
// ReactDOM.render(
//   <UserProvider>
//     <MenuProvider>
//       <MasterProvider>
//         <Router>
//           <Provider store={store}>
//             <App />
//           </Provider>
//         </Router>
//       </MasterProvider>
//     </MenuProvider>
//   </UserProvider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
