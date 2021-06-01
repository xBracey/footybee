import { IRootState } from "redux/reducers";
import { apiRequest, authorisedRequest } from "../api";
import { IAPIResponse } from "../types";

export const loginUser = async (
  username: string,
  password: string
): Promise<IAPIResponse> => {
  const data = { username, password };

  const errorMessage = "Username or password is incorrect.";

  const response = await apiRequest(
    "/user/login",
    { method: "POST", data },
    null,
    errorMessage
  );

  return response;
};

export const fetchUser = async (state: IRootState): Promise<IAPIResponse> =>
  authorisedRequest(state, "/user");

export const registerUser = async (
  username: string,
  password: string,
  email: string
): Promise<IAPIResponse> => {
  const data = { username, password, email };

  const successMessage = "User has been successfully registered";

  const response = await apiRequest(
    "/user/register",
    { method: "POST", data },
    successMessage
  );

  return response;
};

export const fetchUserPoints = async (
  state: IRootState
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/user/points/${state.user.username}`);

export const postUserLeague = async (
  state: IRootState,
  leagueName: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/userLeague/create`, {
    method: "POST",
    data: { username: state.user.username, leagueName },
  });

export const postNewLeague = async (
  state: IRootState,
  leagueName: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/league/create`, {
    method: "POST",
    data: { username: state.user.username, leagueName },
  });

export const postGoldenBoot = async (
  state: IRootState,
  name: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, "/user/prediction/goldenboot", {
    method: "POST",
    data: { name },
  });

export const postWinner = async (
  state: IRootState,
  name: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, "/user/prediction/winner", {
    method: "POST",
    data: { name },
  });
