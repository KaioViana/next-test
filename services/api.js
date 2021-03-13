import axios from "axios";

const api = axios.create({
  baseURL: "https://www.dcco.com.br/cms",
});

export default api;
