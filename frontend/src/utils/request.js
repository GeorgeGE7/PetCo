import axios from "axios";

const BASE_URL = axios.create({ baseURL: "petco-backend-production.up.railway.app" });

export default BASE_URL;
