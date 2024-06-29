import {
  AxiosError,
  AxiosHeaders,
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosResponseHeaders,
  RawAxiosResponseHeaders,
} from "axios";

export interface AxiosMockCallI {
  success: any;
  response_headers?: RawAxiosResponseHeaders | AxiosResponseHeaders;
  request_headers?: AxiosRequestHeaders;
  failure: any;
  failure_code: string;
  time?: number;
  successRate?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
}

export class AxiosMock<T = any> {
  get(props: AxiosMockCallI): Promise<AxiosResponse<T>> {
    return this.mock_call(props);
  }

  post(props: AxiosMockCallI): Promise<AxiosResponse<T>> {
    return this.mock_call(props);
  }

  patch(props: AxiosMockCallI): Promise<AxiosResponse<T>> {
    return this.mock_call(props);
  }

  put(props: AxiosMockCallI): Promise<AxiosResponse<T>> {
    return this.mock_call(props);
  }

  delete(props: AxiosMockCallI): Promise<AxiosResponse<T>> {
    return this.mock_call(props);
  }

  private mock_call({
    success,
    failure,
    failure_code,
    time = 800,
    successRate = 0.9,
    response_headers,
    request_headers = new AxiosHeaders(),
  }: AxiosMockCallI): Promise<AxiosResponse<T>> {
    return new Promise<AxiosResponse<T>>((resolve, reject) => {
      setTimeout(() => {
        // Simulate a successful API call with a specified success rate
        if (Math.random() < successRate || successRate == 1) {
          const successResponse: AxiosResponse<T> = {
            data: success,
            status: 200,
            statusText: "OK",
            headers: response_headers ?? {},
            config: {
              headers: request_headers,
            },
            request: {},
          };

          resolve(successResponse);
        } else {
          const errorResponse = {
            response: {
              data: failure,
              status: failure_code,
              statusText: "Error",
              headers: response_headers ?? {},
              config: {},
              request: {},
            },
            isAxiosError: true,
            toJSON: () => ({}),
          };

          reject(AxiosError.from(errorResponse));
        }
      }, time);
    });
  }
}
