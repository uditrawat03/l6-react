import axios from "axios";
import Enviroment from "../config/enviorment";

export default {
  user: {
    login: creadentials =>
      axios
        .post(Enviroment.api_url + "login", { creadentials })
        .then(res => res.data.user)
  }
};
