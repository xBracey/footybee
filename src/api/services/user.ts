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

const addUser = async (userData: IUser): Promise<IUserResponse> => {
  try {
    const user = await models.User.create(userData);
    return { user };
  } catch (error) {
    return { error: new StatusError(error), user: null };
  }
};

const addUsers = async (usersData: IUser[]): Promise<IUsersResponse> => {
  try {
    const users = await models.User.bulkCreate(usersData);
    return { users };
  } catch (error) {
    return { error: new StatusError(error), users: null };
  }
};

const getUser = async (username: string): Promise<IUserResponse> => {
  const user = await models.User.findOne({
    where: {
      username,
    },
  });
  return { user };
};

const getUsers = async (usernames: string[]): Promise<IUsersResponse> => {
  const users = await models.User.findAll({
    where: {
      username: usernames,
    },
  });
  return { users };
};

const getAllUsers = async (): Promise<IUsersResponse> => {
  const users = await models.User.findAll();
  return { users };
};

const deleteUser = async (username: string): Promise<IUserResponse> => {
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

export { addUser, addUsers, getUser, getUsers, getAllUsers, deleteUser };
