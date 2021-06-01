import { models } from "../config";
import IUser from "../models/User/type";
import { saltRounds, StatusError } from "../lib";
import { League, User } from "../models";
import { ValidationError } from "sequelize";
import bcrypt from "bcrypt";
import moment from "moment";

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
): Promise<IUserResponse> => {
  const [, user] = await models.User.update(
    { goldenBootPrediction },
    {
      where: {
        username,
      },
    }
  );

  return user[0] ? { user: user[0] } : { user: null };
};

export const postWinner = async (
  username: string,
  winnerPrediction: string
): Promise<IUserResponse> => {
  const [, user] = await models.User.update(
    { winnerPrediction },
    {
      where: {
        username,
      },
    }
  );

  return user[0] ? { user: user[0] } : { user: null };
};
