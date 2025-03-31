import axios, { InternalAxiosRequestConfig } from "axios"
import { constantsENV } from "client/config/constants";

const apiService = axios.create({
  baseURL: constantsENV.API_BASE_URL,
});

apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Global error handler:", error);
    return Promise.reject(error);
  }
);

export const setTokenInterceptor = (token: string) => {
  apiService.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}


export default apiService