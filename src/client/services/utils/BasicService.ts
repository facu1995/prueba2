import { ParamSearch, ResponseSearch } from "../../interface/services/BaseService.model";
import apiService from "./API";
import { AxiosRequestConfig } from "axios";
import { BATCH } from "./constants";

class BasicService<T, N, C extends ParamSearch<C>> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public get = async (signal: AbortSignal, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.get(this.endpoint, { ...config, signal });
    return response as unknown as T;
  };

  public getBasic = async (signal: AbortSignal, config?: AxiosRequestConfig): Promise<T[]> => {
    const response = await apiService.get(this.endpoint, { ...config, signal });
    return response as unknown as T[];
  };

  public post = async (signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.post(this.endpoint, payload, { ...config, signal });
    return response as unknown as T;
  };

  public put = async (signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<T> => {
    const response = await apiService.put(this.endpoint, payload, { ...config, signal });
    return response as unknown as T;
  };

  public delete = async (signal: AbortSignal, config?: AxiosRequestConfig): Promise<void> => {
    await apiService.delete(this.endpoint, { ...config, signal });
  };
  
  public deleteBatch = async (signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<void> => {
    await apiService.delete(this.endpoint.concat(BATCH), {
      ...config,
      signal,
      data: payload,
    });
  };

  public postBatch = async (signal: AbortSignal, payload?: N[], config?: AxiosRequestConfig): Promise<T[]> => {
    const response = await apiService.post(this.endpoint.concat(BATCH), payload, { ...config, signal });
    return response as unknown as T[];
  };

  public putBatch = async (signal: AbortSignal, payload?: N[], config?: AxiosRequestConfig): Promise<T[]> => {
    const response = await apiService.put(this.endpoint.concat(BATCH), payload, { ...config, signal });
    return response as unknown as T[];
  };

  public getSearch = async (signal: AbortSignal, params?: C, config?: AxiosRequestConfig): Promise<ResponseSearch<T>> => {
    const response = await apiService.get<T>(this.endpoint.concat("/search"), { ...config, signal, params });
    return response as unknown as ResponseSearch<T>;
  };
}


export default BasicService;