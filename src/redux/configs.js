import axios from "axios";
import EventBus from "../common/EventBus";
import secureLocalStorage from "react-secure-storage";

export const BasicAuth = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

export const Auth = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    Authorization: `Token ${secureLocalStorage.getItem("pref")?.token}`,
  },
});

export const AuthFD = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  // headers: {
  //   Authorization: `Token ${secureLocalStorage.getItem("pref")?.token}`,
  //   "Content-Type": "multipart/form-data",
  // },
});

export const userName = secureLocalStorage.getItem("pref")?.name;
export const userEmail = secureLocalStorage.getItem("pref")?.email;

export const baseUrl = process.env.REACT_APP_API_ENDPOINT;
export const DispatchErrorHandler = (error) => {
  if (error?.code == "ERR_NETWORK") {
    EventBus.dispatch("server_down");
  }
  if (error?.response?.status == 401) {
    EventBus.dispatch("logout");
  }
  if (error?.response?.status == 400) {
    if (error?.response?.data?.message) {
      EventBus?.dispatch("unique", error?.response?.data?.message);
    }
    if (error?.response?.data?.error_detail) {
      EventBus?.dispatch("error", error?.response?.data?.error_detail);
    }
  }
  // if not a token expire error; catch Acc expiry errors validation like errors => and dispatch event with error data
  else {
    // Account Expiry error handle
    if (
      error?.response?.status == 403 &&
      error?.response?.data?.Error.toLowerCase().includes("account has expired")
    ) {
      EventBus.dispatch("acc_expired");
    } //other
    else {
      EventBus.dispatch("error", error?.response?.data?.error_detail);
    }
  }
};
