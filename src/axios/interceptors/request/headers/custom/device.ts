import { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

const addDeviceHeader = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const namespace = config.params.namespace || false;
  const headerPrefix = namespace ? "X-" + namespace : "X-";

  const deviceId = config.params.deviceId || "unknown";
  const deviceName = config.params.deviceName || "unknown";

  (config.headers as AxiosHeaders)
    .set(headerPrefix + "Device-Id", deviceId)
    .set(headerPrefix + "Device-Name", deviceName);
  return config;
};
