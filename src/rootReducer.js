import { combineReducers } from "redux";
import User from "./reducers/User";
import projects from "./reducers/projects";
import tasks from "./reducers/tasks";
import masters from "./reducers/masters";

export default combineReducers({
  User,
  projects,
  tasks,
  masters
});
