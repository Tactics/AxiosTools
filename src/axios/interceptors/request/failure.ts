import { AxiosError } from "axios";

export const interceptorFailure = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};
