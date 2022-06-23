import axios from "axios";

const BASE_URL = "https://kenziehub.herokuapp.com"

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

export default api;