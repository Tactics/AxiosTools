import { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

const addAccessToken = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const access_token = config.params.access_token || false;
  if (access_token) {
    (config.headers as AxiosHeaders).set(
      "Authorization",
      "Bearer " + access_token,
    );
  }
  return config;
};
