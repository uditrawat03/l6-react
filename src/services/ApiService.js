import axios from "axios";
import Enviroment from "../config/enviorment";

export const getMethod = url => {
  return axios
    .get(Enviroment.api_url + url, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.usertoken}`
      }
    })

    .catch(err => {});
};

export const postMethod = (url, param) => {
  return axios
    .post(Enviroment.api_url + url, param, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.usertoken}`
      }
    })
    .catch(err => {});
};

export const login = (url, param) => {
  return axios
    .post(Enviroment.api_url + url, param, {
      headers: {
        "content-type": "application/json"
      }
    })
    .then(res => {
      localStorage.setItem("usertoken", res.data.token);
    })
    .catch(err => {});
};
