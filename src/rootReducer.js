import { combineReducers } from "redux";
import User from "./reducers/User";
import projects from "./reducers/projects";
import tasks from "./reducers/tasks";
import masters from "./reducers/masters";
import projectWorkflows from "./reducers/projectWorkflows";

export default combineReducers({
  User,
  projects,
  tasks,
  masters,
  projectWorkflows
});
