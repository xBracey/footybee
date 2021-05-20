import {
  addUserLeague,
  addUserLeagues,
  deleteUserLeague,
  editUserLeague,
  getUsersLeagues,
} from "../services";
import IUserLeague, { isValidUserLeague } from "../models/UserLeague/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  switch (code) {
    case 0:
      return { status, error: error.message };
    case 1:
      return { status, error: "UserLeague ID already exists" };
    case 2:
      return { status, error: error.message };
    case 3:
      return { status, error: error.message };
    case 4:
      return { status, error: "UserLeague ID does not exist" };
    case 5:
      return { status, error: error.message };
  }
};

export const createController = async (
  body: IUserLeague
): Promise<controllerResponse> => {
  if (!isValidUserLeague(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, userLeague } = await addUserLeague(body);

  if (!error) {
    return { status: 200, response: userLeague };
  }

  return handleError(error);
};

export const bulkCreateController = async (body: {
  userLeagues: IUserLeague[];
}): Promise<controllerResponse> => {
  if (
    !checkBody(body) ||
    !body.userLeagues ||
    !validateArrayTypeCheck(body.userLeagues, isValidUserLeague)
  ) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, userLeagues } = await addUserLeagues(body.userLeagues);

  if (!error) {
    return { status: 200, response: userLeagues };
  }

  return handleError(error);
};

export const deleteController = async (
  username: string,
  leagueName: string
): Promise<controllerResponse> => {
  const { error, userLeague } = await deleteUserLeague(username, leagueName);

  if (!error) {
    return { status: 200, response: userLeague };
  }

  return handleError(error);
};

export const editController = async (
  username: string,
  leagueName: string,
  admin: boolean
): Promise<controllerResponse> => {
  const { error, userLeague } = await editUserLeague(
    username,
    leagueName,
    admin
  );

  if (!error) {
    return { status: 200, response: userLeague };
  }

  return handleError(error);
};

export const getController = async (
  username: string
): Promise<controllerResponse> => {
  const { error, userLeagues } = await getUsersLeagues(username);

  if (!error) {
    return { status: 200, response: userLeagues };
  }

  return handleError(error);
};
