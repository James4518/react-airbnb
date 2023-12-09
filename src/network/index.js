import { BASE_URL, TIME_OUT } from "./request/config";
import { hyRequest } from "./request";
const request = new hyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
export default request;

