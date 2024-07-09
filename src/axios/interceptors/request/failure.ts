import { AxiosError } from "axios";

const interceptorFailure = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export { interceptorFailure };
