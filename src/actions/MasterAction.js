import api from "../services/api";

export const SET_MASTERS = "SET_MASTERS";

export const setMasters = masters => {
  return {
    type: SET_MASTERS,
    masters
  };
};

export const fetchMasters = masterName => {
  return dispatch => {
    api.service.get(masterName).then(data => {
      dispatch(setMasters(data));
    });
  };
};
