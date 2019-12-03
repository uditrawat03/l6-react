import api from "../services/api";

export const getBrandList = params => dispatch => {
  return api.service.get("crm/companies");
};
