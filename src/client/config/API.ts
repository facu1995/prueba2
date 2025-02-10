import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import Cookies from "js-cookie"
import { constants } from "./constants"

const API_BASE_URL = constants.API_BASE_URL

const apiService = {
    get: async <T>(endpoint: string, config: AxiosRequestConfig): Promise<T> => {
        try {
            const response: AxiosResponse<T> = await axios.get(
                `${API_BASE_URL}${endpoint}`,
                addAccessTokenAndTenantToConfig(config)
            )
            return response.data
        } catch (error) {
            console.error("Error in GET request:", error)
            // if (axios.isAxiosError(error) && error.response?.status === 401) {
            //     Cookies.remove('accessToken', {path: '/'});
            // }
            throw error
        }
    },
    post: async <T, N>(endpoint: string, data: N, config: AxiosRequestConfig): Promise<T> => {
        try {
            const response: AxiosResponse<T> = await axios.post(
                `${API_BASE_URL}/${endpoint}`,
                data,
                addAccessTokenAndTenantToConfig(config)
            )
            return response.data
        } catch (error) {
            console.error("Error in GET request:", error)
            // if (axios.isAxiosError(error) && error.response?.status === 401) {
            //     Cookies.remove('accessToken', {path: '/'});
            // }

            throw error
        }
    }
}
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
