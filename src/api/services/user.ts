import { models } from "../config";
import IUser from "../models/User/type";
import { saltRounds, StatusError } from "../lib";
import { League, User } from "../models";
import { ValidationError } from "sequelize";
import bcrypt from "bcrypt";
import moment from "moment";
import crypto from "crypto";

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
    const verification_token = crypto.randomBytes(20).toString("hex");
    const verification_expiry = Date.now() + 24 * 60 * 60 * 5 * 1000;

    const user = await models.User.create({
      ...userData,
      password,
      verification_token,
      verification_expiry,
    });
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

export const addUsersSeed = async (
  usersData: IUser[]
): Promise<IUsersResponse> => {
  try {
    const users = await models.User.bulkCreate(usersData);
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
    include: [League],
  });

  const error = new StatusError(
    new ValidationError("Primary Key not found when getting entity")
  );

  return user ? { user } : { error, user: null };
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

export const getUserPoints = async (
  username: string
): Promise<{
  points: number;
  pointsToday: number;
}> => {
  let points = 0;
  let pointsToday = 0;

  const matchPredictions = await models.GroupMatchPrediction.findAll({
    where: {
      username,
    },
  });

  const teamPredictions = await models.TeamPrediction.findAll({
    where: {
      username,
    },
  });

  for (let index = 0; index < matchPredictions.length; index++) {
    const matchPrediction = matchPredictions[index];

    points += matchPrediction.get("points", { plain: true });

    const match = await models.GroupMatch.findOne({
      where: {
        id: matchPrediction.get("groupMatchId", { plain: true }),
      },
    });

    if (moment(match.get("date", { plain: true })).isSame(new Date(), "day")) {
      pointsToday += matchPrediction.get("points", { plain: true });
    }
  }

  for (let index = 0; index < teamPredictions.length; index++) {
    const teamPrediction = teamPredictions[index];

    points += teamPrediction.get("points", { plain: true });
  }

  return { points, pointsToday };
};

export const postGoldenBoot = async (
  username: string,
  goldenBootPrediction: string
): Promise<{
  goldenBootPrediction: string;
}> => {
  await models.User.update(
    { goldenBootPrediction },
    {
      where: {
        username,
      },
    }
  );

  return { goldenBootPrediction };
};

export const postWinner = async (
  username: string,
  winnerPrediction: string
): Promise<{
  winnerPrediction: string;
}> => {
  await models.User.update(
    { winnerPrediction },
    {
      where: {
        username,
      },
    }
  );

  return { winnerPrediction };
};

export const postEmailVerify = async (
  token: string
): Promise<IUserResponse> => {
  const error = new StatusError(
    new ValidationError("Token is not valid or has expired")
  );

  if (!token) {
    return { error, user: null };
  }

  const user = await models.User.findOne({
    where: {
      verification_token: token,
    },
  });

  if (!user) {
    return { error, user: null };
  }

  user.update({
    verification_token: null,
    verification_expiry: null,
    verified: true,
  });

  user.save();

  return { user };
};

export const postForgotPassword = async (
  email: string
): Promise<IUserResponse> => {
  if (!email) {
    return { user: null };
  }

  const user = await models.User.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    return { user: null };
  }

  const forgot_password_token = crypto.randomBytes(20).toString("hex");
  const forgot_password_expiry = Date.now() + 24 * 60 * 60 * 1 * 1000;

  user.update({
    forgot_password_token,
    forgot_password_expiry,
  });

  user.save();

  return { user };
};

export const postResetPassword = async (
  token: string,
  password: string
): Promise<IUserResponse> => {
  const error = new StatusError(
    new ValidationError("Token is not valid or has expired")
  );

  if (!token || !password) {
    return { error, user: null };
  }

  const user = await models.User.findOne({
    where: {
      forgot_password_token: token,
    },
  });

  if (!user) {
    return { error, user: null };
  }

  const passwordHash = await bcrypt.hash(password, saltRounds);

  user.update({
    forgot_password_token: null,
    forgot_password_expiry: null,
    password: passwordHash,
  });

  user.save();

  return { user };
};
