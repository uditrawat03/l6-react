import axios from "axios";
import Enviroment from "../config/enviorment";

export default {
  user: {
    login: credentials =>
      axios
        .post(Enviroment.api_url + "login", { credentials })
        .then(res => res.data.user)
  }
};
