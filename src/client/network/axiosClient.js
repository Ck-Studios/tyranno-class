import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:3000/dev",

});

export function setAuthToken(token) {
  if (!token) {
    token = "";
    delete axiosClient.defaults.headers.common.Authorization;
  } else {
    axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}
