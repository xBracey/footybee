import { IRootState } from "redux/reducers";
import { apiRequest, authorisedRequest } from "../api";
import { IAPIResponse } from "../types";

export const loginUser = async (
  username: string,
  password: string
): Promise<IAPIResponse> => {
  const data = { username, password };

  const response = await apiRequest("/user/login", { method: "POST", data });

  return response;
};

export const fetchUser = async (state: IRootState): Promise<IAPIResponse> =>
  authorisedRequest(state, "/user");
