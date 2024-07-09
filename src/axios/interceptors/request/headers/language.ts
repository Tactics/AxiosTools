import { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

const addLanguageHeader = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const language = config.params.language || "en";
  (config.headers as AxiosHeaders).set("Accept-Language", language);
  return config;
};
