import { InternalAxiosRequestConfig, RawAxiosResponseHeaders, AxiosResponseHeaders, AxiosRequestHeaders, AxiosResponse } from 'axios';

declare const addDeviceHeader: (config: InternalAxiosRequestConfig) => Promise<InternalAxiosRequestConfig>;

declare const addDomainHeader: (config: InternalAxiosRequestConfig) => Promise<InternalAxiosRequestConfig>;

declare const addLanguageHeader: (config: InternalAxiosRequestConfig) => Promise<InternalAxiosRequestConfig>;

declare const addJsonHeaders: (config: InternalAxiosRequestConfig) => Promise<InternalAxiosRequestConfig>;

declare const addAccessTokenHeader: (config: InternalAxiosRequestConfig) => Promise<InternalAxiosRequestConfig>;

interface AxiosMockCallI {
    success: any;
    response_headers?: RawAxiosResponseHeaders | AxiosResponseHeaders;
    request_headers?: AxiosRequestHeaders;
    failure: any;
    failure_code: string;
    time?: number;
    successRate?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
}
declare class AxiosMock<T = any> {
    get(props: AxiosMockCallI): Promise<AxiosResponse<T>>;
    post(props: AxiosMockCallI): Promise<AxiosResponse<T>>;
    patch(props: AxiosMockCallI): Promise<AxiosResponse<T>>;
    put(props: AxiosMockCallI): Promise<AxiosResponse<T>>;
    delete(props: AxiosMockCallI): Promise<AxiosResponse<T>>;
    private mock_call;
}

export { AxiosMock, type AxiosMockCallI, addAccessTokenHeader, addDeviceHeader, addDomainHeader, addJsonHeaders, addLanguageHeader };
