import axios from "axios";
import { API_URL } from "../config/app.config";
import { getStorage, removeStorage, setStorage } from "../utils/storage.utils";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getStorage("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;
    const accessToken = getStorage("accessToken");

    // if (response.status === 401) {
    //   logout();
    // }

    return Promise.reject(error.response);
  }
);

const logout = () => {
  removeStorage("accessToken");
  removeStorage("refreshToken");
};

export default api;
