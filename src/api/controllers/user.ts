import { addUser, addUsers, deleteUser } from "../services";
import IUser, { isValidUser } from "../models/User/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  switch (code) {
    case 0:
      return { status, error: error.message };
    case 1:
      return { status, error: "Username or email already exists" };
    case 2:
      return { status, error: error.message };
    case 3:
      return { status, error: "Username does not exist" };
    case 4:
      return { status, error: error.message };
    case 5:
      return { status, error: error.message };
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

export const bulkCreateController = async (body: {
  users: IUser[];
}): Promise<controllerResponse> => {
  if (
    !checkBody(body) ||
    !body.users ||
    !validateArrayTypeCheck(body.users, isValidUser)
  ) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, users } = await addUsers(body.users);

  if (!error) {
    return { status: 200, response: users };
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
