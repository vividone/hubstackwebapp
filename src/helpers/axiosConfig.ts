import axios from "axios";
import { BASE_URL } from "./useUrls";
import { TOKEN } from "@/utils/token";

export const setAuthToken = (token: string) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const getAuthToken = () => {
  const getCookie = (name: string): string | null => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  };
  if (typeof window !== "undefined") {
    // Get's Cookie storage
    return getCookie(TOKEN.ACCESS);
  }
};

export const getAuthorizationHeader = () => `Bearer ${getAuthToken()}`;

// Creating axios client, preconfigured with base url and other fields
const axiosInstance = axios.create({
  baseURL: BASE_URL as string,
  timeout: 30000,
  timeoutErrorMessage:
    "Your request timed out, please check your internet connection",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
    common: {
      Authorization: getAuthorizationHeader(),
    },
  },
});

export const cancelTokenSource = axios.CancelToken.source();

// Intercept requests
axiosInstance.interceptors.request.use(
  async (config: any) => {
    config.headers.Authorization = getAuthorizationHeader();
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

//Intercept responses
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(error);
    });
  }
);

export default axiosInstance;
