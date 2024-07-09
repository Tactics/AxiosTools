import { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

const addDomainHeader = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const namespace = config.params.namespace || false;
  const headerPrefix = namespace ? "X-" + namespace : "X-";

  const domain = window.location.host.split(":")[0];

  (config.headers as AxiosHeaders).set(headerPrefix + "Domain", domain);
  return config;
};
