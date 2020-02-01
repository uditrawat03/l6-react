import { SET_TASKS, TASK_FETCHED } from "../actions/TaskAction";

const tasks = (state = [], action = {}) => {
  switch (action.type) {
    case TASK_FETCHED:
      const index = state.findIndex(item => {
        return item.id === parseInt(action.task.id);
      });
      if (index > -1) {
        return state.map(item => {
          if (item.id === action.task.id) return action.task;
          return item;
        });
      } else {
        return [...state, action.task];
      }
    case SET_TASKS:
      return action.tasks;
    default:
      return state;
  }
};

export default tasks;
