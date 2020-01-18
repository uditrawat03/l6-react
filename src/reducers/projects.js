import {
  SET_PROJECTS,
  ADD_PROJECT,
  PROJECT_FETCHED,
  UPDATE_PROJECT
} from "../actions/ProjectAction";

export default function projects(state = [], action = {}) {
  switch (action.type) {
    case ADD_PROJECT:
      return [...state, action.project];
    case UPDATE_PROJECT:
      return state.map(item => {
        if (item.id === action.project.id) return action.project;
        return item;
      });
    case PROJECT_FETCHED:
      const index = state.findIndex(item => {
        return item.id === action.project.id;
      });
      if (index > -1) {
        return state.map(item => {
          if (item.id === action.project.id) return action.project;
          return item;
        });
      } else {
        return [...state, action.project];
      }

    case SET_PROJECTS:
      return action.projects;
    default:
      return state;
  }
}
