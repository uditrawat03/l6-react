import {
  SET_PROJECT_WORKFLOWS,
  ADD_PROJECT_WORKFLOW,
  DRAG_HAPPENED
} from "../actions/ProjectWorkflowAction";

const tasks = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_PROJECT_WORKFLOW:
      const workflow = {
        id: action.workflow.id,
        title: action.workflow.title,
        projectId: action.workflow.project_id,
        tasks: []
      };
      return [...state, workflow];

    case DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd
      } = action.payload;

      const newState = [...state];

      // In the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(item => parseInt(droppableIdStart) === item.id);
        const task = list.tasks.splice(droppableIndexStart, 1);
        list.tasks.splice(droppableIndexEnd, 0, ...task);
      }

      // Other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state.find(
          item => parseInt(droppableIdStart) === item.id
        );

        // pull out the task from the list
        const task = listStart.tasks.splice(droppableIndexStart, 1);

        // find the list where drag ended
        const listEnd = state.find(
          item => parseInt(droppableIdEnd) === item.id
        );

        // put the task to the new list
        listEnd.tasks.splice(droppableIndexEnd, 0, ...task);
      }

      return newState;

    case SET_PROJECT_WORKFLOWS:
      return action.projectWorkflows;
    default:
      return state;
  }
};

export default tasks;
