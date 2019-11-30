import { USER_LOGGED_IN } from "../services/types";
import api from "../services/api";

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => dispatch(login(user)));
