import api from "../services/api";

export const ADD_PROJECT_WORKFLOW = "ADD_PROJECT_WORKFLOW";
export const SET_PROJECT_WORKFLOWS = "SET_PROJECT_WORKFLOWS";
export const DRAG_HAPPENED = "DRAG_HAPPENED";

export const setProjectWorkflow = projectWorkflows => {
  return {
    type: SET_PROJECT_WORKFLOWS,
    projectWorkflows
  };
};

export const projectWorkflowUpdated = workflow => {
  return {
    type: ADD_PROJECT_WORKFLOW,
    workflow
  };
};

export const fetchProjectWorkflows = projectId => {
  return dispatch => {
    api.service
      .get(`project-workflow/list/${projectId}`)
      .then(projectWorkflows => {
        dispatch(setProjectWorkflow(projectWorkflows.data));
      });
  };
};

export const saveProjectWorkflow = data => {
  return dispatch => {
    api.service.post("project-workflow/create", { data }).then(item => {
      dispatch(projectWorkflowUpdated(item));
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId
    }
  };
};

export const movedTask = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return dispatch => {
    dispatch(
      sort(
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      )
    );
    api.service
      .post("task/moved", {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      })
      .then(result => {});
  };
};
