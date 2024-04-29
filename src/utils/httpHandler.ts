import axiosInstance, { HttpOptions } from "./httpInstance"


export default class HTTPHandler {
    async request<T>(options: HttpOptions) {
      const response = await axiosInstance<T>(options);
  
      return response as T;
    }
  }