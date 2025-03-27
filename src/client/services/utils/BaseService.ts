import { ParamSearch, ResponseSearch } from "../../interface/services/BaseService.model";
import apiService from "./API";
import { AxiosRequestConfig } from "axios";
import { BATCH } from "./constants";

class BaseService {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  
  public getBasic = async <T>(signal: AbortSignal, config?: AxiosRequestConfig): Promise<T[]> => {
    const response = await apiService.get(this.endpoint, { ...config, signal });
    return response as unknown as T[];
  };

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

  public delete = async(signal: AbortSignal, config?: AxiosRequestConfig): Promise<void> => {
    await apiService.delete(this.endpoint, { ...config, signal });
  };

  public getSearch = async <T, N extends ParamSearch<N>>(signal: AbortSignal, params?: N, config?: AxiosRequestConfig): Promise<ResponseSearch<T>> => {
    const response = await apiService.get(this.endpoint.concat("/search"), { ...config, signal, params });
     return response as unknown as ResponseSearch<T>;
  };
  
  public deleteBatch = async <N>(signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<void> => {
    await apiService.delete(this.endpoint.concat(BATCH), {
      ...config,
      signal,
      data: payload,
    });
  };

  public postBatch = async <T, N>(signal: AbortSignal, payload?: N[], config?: AxiosRequestConfig): Promise<T[]> => {
    const response = await apiService.post(this.endpoint.concat(BATCH), payload, { ...config, signal });
    return response as unknown as T[];
  };

  public putBatch = async <T, N>(signal: AbortSignal, payload?: N[], config?: AxiosRequestConfig): Promise<T[]> => {
    const response = await apiService.put(this.endpoint.concat(BATCH), payload, { ...config, signal });
    return response as unknown as T[];
  };
}

export default BaseService;