import { ParamSearch } from "../@types/services/BaseService.model";
import apiService from "./API";
import { AxiosRequestConfig } from "axios";

class BasicService<T, N,C extends ParamSearch> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public get = async (signal: AbortSignal, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.get(this.endpoint, { ...config, signal });
    return response as T;
  };

  public post = async (signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.post(this.endpoint, payload, { ...config, signal });
    return response as T;
  };

  public put = async (signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.put(this.endpoint, payload, { ...config, signal });
    return response as T;
  };

  public delete = async (signal: AbortSignal, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.delete(this.endpoint, { ...config, signal });
    return response as T;
  };

  public getSearch = async (signal: AbortSignal, params?: C, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.get<T>(this.endpoint.concat("search"), { ...config, signal, params });
    return response as T;
  };
}


export default BasicService;