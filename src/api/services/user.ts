import { models } from "../config";
import IUser from "../models/User/type";
import { saltRounds, StatusError } from "../../lib";
import { User } from "../models";
import { ValidationError } from "sequelize";
import bcrypt from "bcrypt";

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
    const password = await bcrypt.hash(userData.password, saltRounds);

    const user = await models.User.create({ ...userData, password });
    return { user };
  } catch (error) {
    return { error: new StatusError(error), user: null };
  }
};

export const addUsers = async (usersData: IUser[]): Promise<IUsersResponse> => {
  try {
    const usersDataCopy = [...usersData];

    for (let index = 0; index < usersDataCopy.length; index++) {
      const userData = usersDataCopy[index];
      userData.password = await bcrypt.hash(userData.password, saltRounds);
    }

    const users = await models.User.bulkCreate(usersDataCopy);
    return { users };
  } catch (error) {
    return { error: new StatusError(error), users: null };
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
    },
  });

  const error = new StatusError(
    new ValidationError("Username or password is incorrect")
  );

  if (user) {
    const passwordValid = await bcrypt.compare(password, user.get("password"));

    return passwordValid ? { user } : { error, user: null };
  }

  return { error, user: null };
};
