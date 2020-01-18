import api from "../services/api";

export const SET_PROJECTS = "SET_PROJECTS";
export const ADD_PROJECT = "ADD_PROJECT";
export const PROJECT_FETCHED = "PROJECT_FETCHED";
export const UPDATE_PROJECT = "UPDATE_PROJECT";

export const setProjects = projects => {
  return {
    type: SET_PROJECTS,
    projects
  };
};

export const projectAdded = project => {
  return {
    type: ADD_PROJECT,
    project
  };
};

export const projectUpdated = project => {
  return {
    type: UPDATE_PROJECT,
    project
  };
};

export const projectFetched = project => {
  return {
    type: PROJECT_FETCHED,
    project
  };
};

export const saveProject = data => dispatch => {
  return api.service.post("projects/create", { data }).then(item => {
    dispatch(projectAdded(item.project));
  });
};

export const fetchProjects = () => {
  return dispatch => {
    api.service.get("projects").then(projects => {
      dispatch(setProjects(projects.data));
    });
  };
};

export const fetchProject = id => dispatch => {
  return api.service.get(`projects/${id}`).then(data => {
    dispatch(projectFetched(data));
  });
};

export const updateProject = data => dispatch => {
  return api.service.post(`projects/update/${data.id}`, { data }).then(item => {
    dispatch(projectUpdated(item));
  });
};
