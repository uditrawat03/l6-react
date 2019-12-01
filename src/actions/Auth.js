import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../services/types";
import api from "../services/api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.authJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("authJWT");
  dispatch(userLoggedOut());
};
