import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const API_URL = 'http://127.0.0.1:8080/api/';
axios.defaults.withCredentials = true;

class ApiInstance {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      timeout: 120000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
  }

  async get<T>(
    endpoint: string,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await this.axios.get(endpoint, options);
    return response;
  }

  async post<T, D = any>(
    endpoint: string,
    data?: D,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await this.axios.post(
      endpoint,
      data,
      options,
    );
    return response;
  }

  async put<T, D = any>(
    endpoint: string,
    data: D,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await this.axios.put(
      endpoint,
      data,
      options,
    );
    return response;
  }

  async delete<T>(
    endpoint: string,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    const response: AxiosResponse<T> = await this.axios.delete(
      endpoint,
      options,
    );
    return response;
  }
}

export const apiInstance = new ApiInstance();
