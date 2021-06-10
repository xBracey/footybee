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
  leagueCode: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/userLeague/create`, {
    method: "POST",
    data: { username: state.user.username, leagueCode },
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

export const postForgotPassword = async (
  email: string
): Promise<IAPIResponse> => {
  const data = { email };

  const successMessage =
    "Forgot password email will be sent if the email is valid";

  const response = await apiRequest(
    "/user/forgot-password",
    { method: "POST", data },
    successMessage
  );

  return response;
};

export const postChangePassword = async (
  token: string,
  password: string
): Promise<IAPIResponse> => {
  const data = { token, password };

  const successMessage = "Password has successfully been reset";

  const response = await apiRequest(
    "/user/reset-password",
    { method: "POST", data },
    successMessage
  );

  return response;
};

export const postVerifyUser = async (token: string): Promise<IAPIResponse> => {
  const data = { token };

  const successMessage = "User has successfully been verified!";

  const response = await apiRequest(
    "/user/email-verify",
    { method: "POST", data },
    successMessage
  );

  return response;
};

export const postDisplayName = async (
  state: IRootState,
  displayName: string
): Promise<IAPIResponse> => {
  const data = { displayName };

  const successMessage = "Team name has successfully been changed!";

  const response = await authorisedRequest(
    state,
    "/user/displayName",
    { method: "POST", data },
    successMessage
  );

  return response;
};
