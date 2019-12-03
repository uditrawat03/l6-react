import api from "../services/api";

export const getCompaniesList = params => {
  return api.get("/crm/companies");
};
