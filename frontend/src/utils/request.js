import axios from "axios";

const BASE_URL = axios.create({ baseURL: "http://petco-backend-production.up.railway.app" });

export default BASE_URL;
