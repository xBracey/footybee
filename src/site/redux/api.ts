import axios, { AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";
import { IRootState } from "./reducers";
import { IAPIResponse } from "./types";

axiosRetry(axios, { retries: 3 });

export const apiRequest = async (
  url: string,
  options: AxiosRequestConfig = {},
  successMessage: string = null,
  errorMessage: string = null
): Promise<IAPIResponse> => {
  const apiPrefix = "/api";

  try {
    const response = await axios.request({
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      url: apiPrefix + url,
      ...options,
    });

    return {
      data: response.data,
      time: new Date(response.headers.date),
      error: false,
      message: successMessage,
    };
  } catch (err) {
    return {
      data: null,
      time: null,
      error: true,
      message: errorMessage ?? err?.response?.data?.error,
    };
  }
};

export const authorisedRequest = async (
  state: IRootState,
  url: string,
  options: AxiosRequestConfig = {},
  successMessage: string = null,
  errorMessage: string = null
) =>
  apiRequest(
    url,
    {
      ...options,
      headers: { Authorization: `Bearer ${state.auth.token}` },
    },
    successMessage,
    errorMessage
  );
