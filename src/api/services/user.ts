import { models } from "../config";
import IUser from "../models/User/type";
import { StatusError } from "../../lib";
import { User } from "../models";
import { ValidationError } from "sequelize";

interface IUserResponse {
  error?: StatusError;
  user: User | null;
}

interface IUsersResponse {
  error?: StatusError;
  users: User[] | null;
}

export const addUser = async (userData: IUser): Promise<IUserResponse> => {
  try {
    const user = await models.User.create(userData);
    return { user };
  } catch (error) {
    return { error: new StatusError(error), user: null };
  }
};

export const getUser = async (username: string): Promise<IUserResponse> => {
  const user = await models.User.findOne({
    where: {
      username,
    },
  });
  return { user };
};

export const getUsers = async (
  usernames: string[]
): Promise<IUsersResponse> => {
  const users = await models.User.findAll({
    where: {
      username: usernames,
    },
  });
  return { users };
};

export const getAllUsers = async (): Promise<IUsersResponse> => {
  const users = await models.User.findAll();
  return { users };
};

export const deleteUser = async (username: string): Promise<IUserResponse> => {
  const user = await models.User.destroy({
    where: {
      username,
    },
  });

  const error = new StatusError(
    new ValidationError("Primary Key not found when deleting entity")
  );

  return user ? { user: null } : { error, user: null };
};

export const loginUser = async (
  username: string,
  password: string
): Promise<IUserResponse> => {
  const user = await models.User.findOne({
    where: {
      username,
      password,
    },
  });

  const error = new StatusError(
    new ValidationError("Username or password is incorrect")
  );

  return user ? { user: null } : { error, user: null };
};
