import api from "../services/api";

export const SET_TASKS = "SET_TASKS";
export const TASK_FETCHED = "TASK_FETCHED";

export const setTasks = tasks => {
  return {
    type: SET_TASKS,
    tasks
  };
};

export const taskFetched = task => {
  return {
    type: TASK_FETCHED,
    task
  };
};

export const saveTask = data => {
  return dispatch => {
    api.service.post("task/create", { data }).then(result => {});
  };
};

export const fetchTasks = projectId => {
  return dispatch => {
    api.service.get(`task/list/${projectId}`).then(tasks => {
      dispatch(setTasks(tasks));
    });
  };
};

export const fetchTask = taskId => {
  return dispatch => {
    api.service
      .get(`task/${taskId}`)
      .then(task => dispatch(taskFetched(task.data)));
  };
};
