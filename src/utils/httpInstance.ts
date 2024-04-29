// axiosInstance.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create();

const handleResponse = ({ data }: AxiosResponse) => data;
const handleError = (error: any) => {
    let message=""
    if (error.response) {
        message=error.response.data.message
      } else if (error.request) {
        message='Network Error'
      } else {
        message='Request Error'
      }
}

axiosInstance.interceptors.response.use(handleResponse, handleError);

export type HttpOptions = AxiosRequestConfig;
export default axiosInstance;
