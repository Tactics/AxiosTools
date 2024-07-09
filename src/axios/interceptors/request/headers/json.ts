import { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

export const addJsonHeaders = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  (config.headers as AxiosHeaders)
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  return config;
};
