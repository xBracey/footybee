import { addUser, deleteUser, getUser, getUserPoints } from "../services";
import IUser, { isValidUser } from "../models/User/type";
import controllerResponse from "./controller";
import { StatusError } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  switch (code) {
    case 0:
      return { status, error: error.message };
    case 1:
      return { status, error: "Username or email already exists" };
    case 3:
      return { status, error: "Username does not exist" };
  }
};

export const createController = async (
  body: IUser
): Promise<controllerResponse> => {
  if (!isValidUser(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, user } = await addUser(body);

  if (!error) {
    return { status: 200, response: user };
  }

  return handleError(error);
};

export const deleteController = async (
  username: string
): Promise<controllerResponse> => {
  const { error, user } = await deleteUser(username);

  if (!error) {
    return { status: 200, response: user };
  }

  return handleError(error);
};

export const getController = async (
  username: string
): Promise<controllerResponse> => {
  const { user } = await getUser(username);

  return { status: 200, response: user };
};

export const getPointsController = async (
  username: string
): Promise<controllerResponse> => {
  const response = await getUserPoints(username);

  return { status: 200, response };
};
