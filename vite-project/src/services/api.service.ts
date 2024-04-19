import axios, { AxiosError, AxiosResponse } from "axios";

declare module 'axios' {
    export interface AxiosRequestConfig {
        onError?: Function;
        onSuccess?: Function;
        options?: {
            ignoreAbortController?: boolean;
        }
        id?: string;
    }
}

const axiosInstance = axios.create()
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json'
axiosInstance.defaults.withCredentials = true

const requestInterceptor: any = {}

const abortRequest = (id: string) => {
    if (requestInterceptor[id]) {
        requestInterceptor[id]?.abort()
    }
}

export const getAuthTokens = () => {
    const account = localStorage.getItem('account')
    if (!account) return { token: "" }

    const token = JSON.parse(account).token
    return { token }
}

export const setupInterceptors = () => {
    axiosInstance.interceptors.request.use(
        async (config: any) => {
            const requestAbortId = `controller/${config.url}_${config.id}`
            if (!config?.options?.ignoreAbortController && requestInterceptor[requestAbortId]) {
                abortRequest(requestAbortId)
            }
            if (!config?.headers) {
                config.headers = {}
            }
            const { token } = await getAuthTokens()
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            requestInterceptor[requestAbortId] = new AbortController()
            if (requestInterceptor[requestAbortId] !== undefined) {
                config.signal = requestInterceptor[requestAbortId].signal
            }
            return config
        },
        (error: AxiosError) => {
            return Promise.reject(error)
        }
    )

    axiosInstance.interceptors.response.use(
        (res: AxiosResponse) => {
          if (res.config.onSuccess) {
            res.config.onSuccess(res);
          }
          return res;
        },
        (error: AxiosError) => {
          if (error?.config?.onError) {
            error.config.onError(error);
          }
          return Promise.reject(error); // Correctly reject the promise
        },
      );
}

export const apiService = axiosInstance;