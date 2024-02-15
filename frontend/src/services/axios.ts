import axios, { type AxiosRequestConfig } from "axios";
import { appConfig } from "config/app";

export const axiosInstance = axios.create({
  baseURL: appConfig.apiBaseUrl,
});

export const getRequest = async <T>(
  config: Omit<AxiosRequestConfig, "method">
): Promise<T> => {
  const updatedConfig = {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const promise = await axiosInstance({
    ...updatedConfig,
    method: "GET",
  });

  return promise.data;
};

export const postRequest = async <T>(
  config: Omit<AxiosRequestConfig, "method">
): Promise<T> => {
  const updatedConfig = {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const promise = await axiosInstance({
    ...updatedConfig,
    method: "POST",
  });

  return promise.data;
};

export const putRequest = async <T>(
  config: Omit<AxiosRequestConfig, "method">
): Promise<T> => {
  const updatedConfig = {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const promise = await axiosInstance({
    ...updatedConfig,
    method: "PUT",
  });

  return promise.data;
};

export const deleteRequest = async <T>(
  config: Omit<AxiosRequestConfig, "method">
): Promise<T> => {
  const updatedConfig = {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const promise = await axiosInstance({
    ...updatedConfig,
    method: "DELETE",
  });

  return promise.data;
};
