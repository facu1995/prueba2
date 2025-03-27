import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios"
import Cookies from "js-cookie"
/* import { constants } from "../config/constants"
 */

const apiService = axios.create({

  /* const baseURL = constants.API_BASE_URL//TODO */
  baseURL: "https://webhook.site/bd023a1e-821f-4e91-bf41-e66d05989f1f",
});

export const setConfigInterceptor = () => {
  apiService.interceptors.request.use((config) => {
    const token = Cookies.get("accessToken");
    const timeStamp = Cookies.get("timestamp");
    const tenant = Cookies.get("tenant");
    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders;
    }
    config.headers["tenant"] = tenant || "";
    config.headers["timestamp"] = timeStamp || "";
    config.headers["clientId"] = "ID DEL CLIENTE";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });
};

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
        Cookies.set("accessToken", token);
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