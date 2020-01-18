import { SET_MASTERS } from "../actions/MasterAction";

const masters = (state = [], action = {}) => {
  switch (action.type) {
    case SET_MASTERS:
      return action.masters;
    default:
      return state;
  }
};

export default masters;
