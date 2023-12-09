// import axios from "axios";
// import { BASE_URL, TIME_OUT } from "./config";

// class HYRequest {
//   constructor(baseURL, timeout) {
//     this.instance = axios.create({
//       baseURL,
//       timeout,
//     });

//     this.instance.interceptors.response.use(
//       (res) => {
//         return res.data;
//       },
//       (err) => {
//         return err;
//       }
//     );
//   }

//   request(config) {
//     return this.instance.request(config);
//   }

//   get(config) {
//     return this.request({ ...config, method: "get" });
//   }

//   post(config) {
//     return this.request({ ...config, method: "post" });
//   }
// }

// export default new HYRequest(BASE_URL, TIME_OUT);

import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

interface RequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}
interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  showLoading?: boolean;
  interceptor?: RequestInterceptor<T>;
}
export class hyRequest {
  instance: AxiosInstance;
  interceptors?: RequestInterceptor;
  showLoading: boolean;
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptor;
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (error) => {
        return error;
      }
    );
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
  }
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptor?.requestInterceptor) {
        config = config.interceptor.requestInterceptor(config);
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptor?.responseInterceptor) {
            res = config.interceptor.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }
  get<T>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: "Delete" });
  }
  patch<T>(config: RequestConfig<T>) {
    return this.request<T>({ ...config, method: "Patch" });
  }
}
