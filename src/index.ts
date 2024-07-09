export { interceptorFailure } from "@/axios/interceptors/request/failure";

export { addDeviceHeader } from "@/axios/interceptors/request/headers/custom/device";
export { addDomainHeader } from "@/axios/interceptors/request/headers/custom/domain";
export { addLanguageHeader } from "@/axios/interceptors/request/headers/language";
export { addJsonHeaders } from "@/axios/interceptors/request/headers/json";
export { addAccessTokenHeader } from "@/axios/interceptors/request/headers/authorization";

export type { AxiosMockCallI } from "@/axios/mocks/mock";
export { AxiosMock } from "@/axios/mocks/mock";
