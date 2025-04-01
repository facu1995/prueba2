import { ParamSearch, ResponseSearch } from "../../interface/services/BaseService.model";
import apiService from "./API";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { BATCH } from "./constants";

class BaseService {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public getEndpoint = (): string => {
    return this.endpoint;
  };

  public getBasic = async <T>(signal: AbortSignal, config?: AxiosRequestConfig): Promise<AxiosResponse<T[]>> => {
    const url = config?.url || this.endpoint;
    const response = await apiService.get(url, { ...config, signal });
    return response as AxiosResponse<T[]>;
  };

  public get = async <T>(signal: AbortSignal, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    const url = config?.url || this.endpoint;
    const response = await apiService.get(url, { ...config, signal });
    return response as AxiosResponse<T>;
  };

  public post = async <T, N>(signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    const url = config?.url || this.endpoint;
    const response = await apiService.post(url, payload, { ...config, signal });
    return response as AxiosResponse<T>;
  };

  public put = async <T, N>(signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    const url = config?.url || this.endpoint;
    const response = await apiService.put(url, payload, { ...config, signal });
    return response as AxiosResponse<T>;
  };

  public delete = async (signal: AbortSignal, config?: AxiosRequestConfig): Promise<AxiosResponse<void>> => {
    const url = config?.url || this.endpoint;
    const response = await apiService.delete(url, { ...config, signal });
    return response as AxiosResponse<void>;
  };

  public getSearch = async <T, N extends ParamSearch<N>>(signal: AbortSignal, params?: N, config?: AxiosRequestConfig): Promise<AxiosResponse<ResponseSearch<T>>> => {
    const url = config?.url || this.endpoint.concat("/search");
    const response = await apiService.get(url, { ...config, signal, params });
    return response as AxiosResponse<ResponseSearch<T>>;
  };

  public deleteBatch = async <N>(signal: AbortSignal, payload?: N, config?: AxiosRequestConfig): Promise<AxiosResponse<void>> => {
    const url = config?.url || this.endpoint.concat(BATCH);
    const response = await apiService.delete(url, {
      ...config,
      signal,
      data: payload,
    });
    return response as AxiosResponse<void>;
  };

  public postBatch = async <T, N>(signal: AbortSignal, payload?: N[], config?: AxiosRequestConfig): Promise<AxiosResponse<T[]>> => {
    const url = config?.url || this.endpoint.concat(BATCH);
    const response = await apiService.post(url, payload, { ...config, signal });
    return response as AxiosResponse<T[]>;
  };

  public putBatch = async <T, N>(signal: AbortSignal, payload?: N[], config?: AxiosRequestConfig): Promise<AxiosResponse<T[]>> => {
    const url = config?.url || this.endpoint.concat(BATCH);
    const response = await apiService.put(url, payload, { ...config, signal });
    return response as AxiosResponse<T[]>;
  };
}

export default BaseService;