import axios from "axios";

export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 500) {
      console.error("ошибка на беке");
    }
    return Promise.reject(error);
  }
);

export default API;
