import { models } from "../config";
import IUserLeague from "../models/UserLeague/type";
import { StatusError } from "../lib";
import { UserLeague } from "../models";
import { ValidationError } from "sequelize";

interface IUserLeagueResponse {
  error?: StatusError;
  userLeague: UserLeague | null;
}

interface IUserLeaguesResponse {
  error?: StatusError;
  userLeagues: UserLeague[] | null;
}

const addUserLeague = async (
  userLeagueData: IUserLeague
): Promise<IUserLeagueResponse> => {
  try {
    const userLeague = await models.UserLeague.create(userLeagueData);
    return { userLeague };
  } catch (error) {
    return { error: new StatusError(error), userLeague: null };
  }
};

const addUserLeagues = async (
  userLeaguesData: IUserLeague[]
): Promise<IUserLeaguesResponse> => {
  try {
    const userLeagues = await models.UserLeague.bulkCreate(userLeaguesData);
    return { userLeagues };
  } catch (error) {
    return { error: new StatusError(error), userLeagues: null };
  }
};

const getUsersLeagues = async (
  username: string
): Promise<IUserLeaguesResponse> => {
  const userLeagues = await models.UserLeague.findAll({
    where: {
      username,
    },
  });
  console.log(username, userLeagues);

  return { userLeagues };
};

const deleteUserLeague = async (
  username: string,
  leagueName: string
): Promise<IUserLeagueResponse> => {
  const userLeague = await models.UserLeague.destroy({
    where: {
      username,
      leagueName,
    },
  });

  const error = new StatusError(
    new ValidationError("Primary Key not found when deleting entity")
  );

  return userLeague ? { userLeague: null } : { error, userLeague: null };
};

const editUserLeague = async (
  username: string,
  leagueName: string,
  admin: boolean
): Promise<IUserLeagueResponse> => {
  const userLeague = await models.UserLeague.findOne({
    where: {
      username,
      leagueName,
    },
  });

  if (!userLeague) return { userLeague: null };

  userLeague.admin = admin;

  userLeague.save();

  return { userLeague };
};

export {
  addUserLeague,
  addUserLeagues,
  getUsersLeagues,
  deleteUserLeague,
  editUserLeague,
};
