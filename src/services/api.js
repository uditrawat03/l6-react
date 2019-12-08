import axios from "axios";
import Enviroment from "../config/enviorment";

export default {
  user: {
    login: credentials =>
      axios
        .post(Enviroment.api_url + "login", { credentials })
        .then(res => res.data.user)
  },
  service: {
    get: (url, params) =>
      axios.get(Enviroment.api_url + url, { params }).then(res => res.data),
    post: (url, params) =>
      axios.post(Enviroment.api_url + url, params).then(res => res.data)
  }
};
