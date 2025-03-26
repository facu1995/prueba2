import axios, { AxiosRequestConfig } from "axios"
import Cookies from "js-cookie"
/* import { constants } from "../config/constants"
 */
/* const baseURL = constants.API_BASE_URL// */

const apiService = axios.create({

/* const baseURL = constants.API_BASE_URL//TODO */
    baseURL: "https://webhook.site/bd023a1e-821f-4e91-bf41-e66d05989f1f",
    timeout: 10000,
  });
  
  apiService.interceptors.request.use((config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  apiService.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("Global error handler:", error);
      return Promise.reject(error);
    }
  );
  
export default apiService

const addAccessTokenAndTenantToConfig = (obj: AxiosRequestConfig) => {

    ///Implementación con cookies, cambiar según requerimiento del proyecto.
    ///La idea de este método es añadir a la pegada cualquier cosa necesaria para
    ///todas las pegadas.
    const accessToken = Cookies.get("accessToken")
    const timeStamp = Cookies.get("timestamp")
    const tenant = Cookies.get("tenant")
    if (!obj.headers) {
        obj.headers = {}
    }

    obj.headers["session"] = `${accessToken}`
    obj.headers["tenant"] = tenant || ""
    obj.headers["timestamp"] = timeStamp || ""

    obj.headers['clientId'] = 'ID DEL CLIENTE'

    return obj
}
