import axios from "axios";
const API = axios.create({ baseURL: `${config.serverBaseURL}` });

export default API;
