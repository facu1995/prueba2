import { ParamSearch } from "../@types/services/BaseService.model";
import apiService from "./API";
import { AxiosRequestConfig } from "axios";

class BaseService {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public get = async <T>(signal: AbortSignal, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.get(this.endpoint, { ...config, signal });
    return response as T;
  };

  public post = async <T, N>(signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.post(this.endpoint, payload, { ...config, signal });
    return response as T;
  };

  public put = async <T, N>(signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.put(this.endpoint, payload, { ...config, signal });
    return response as T;
  };

  public delete = async <T>(signal: AbortSignal, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.delete(this.endpoint, { ...config, signal });
    return response as T;
  };

  public getSearch = async <T, N extends ParamSearch>(signal: AbortSignal, params?: N, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.get<T>(this.endpoint.concat("search"), { ...config, signal, params });
    return response as T;
  };
}

export default BaseService;