import axios from "axios";
import { storage } from "../utils";
import { STORAGE_KEYS } from "../constants/storagekeys";

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export function getApiClient() {
  return axiosInstance;
}

export async function getAuthApiClient() {
  const token = await storage.getData(STORAGE_KEYS.token);

  axiosInstance.interceptors.request.use((config) => {
    return config;
  });

  if (token?.access_token) {
    axiosInstance.defaults.headers[
      "Authorization"
    ] = `Bearer ${token?.access_token}`;
  }

  return axiosInstance;
}
