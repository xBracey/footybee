import { models } from "../config";
import ILeague from "../models/League/type";
import { League, User } from "../models";
import { StatusError } from "../lib";
import { ValidationError } from "sequelize";

interface ILeagueResponse {
  error?: StatusError;
  league: League | null;
}

interface ILeaguesResponse {
  error?: StatusError;
  leagues: League[] | null;
}

export const addLeague = async (
  leagueData: ILeague
): Promise<ILeagueResponse> => {
  try {
    const league = await models.League.create(leagueData);
    return { league };
  } catch (error) {
    return { error: new StatusError(error), league: null };
  }
};

export const addLeagues = async (
  leaguesData: ILeague[]
): Promise<ILeaguesResponse> => {
  try {
    const leagues = await models.League.bulkCreate(leaguesData);
    return { leagues };
  } catch (error) {
    return { error: new StatusError(error), leagues: null };
  }
};

export const getLeague = async (
  leagueName: string
): Promise<ILeagueResponse> => {
  const league = await models.League.findOne({
    where: {
      leagueName,
    },
    include: [User],
  });
  return { league };
};

export const getLeagues = async (
  leagueNames: string[]
): Promise<ILeaguesResponse> => {
  const leagues = await models.League.findAll({
    where: {
      leagueName: leagueNames,
    },
  });
  return { leagues };
};

export const getAllLeagues = async (): Promise<ILeaguesResponse> => {
  const leagues = await models.League.findAll();
  return { leagues };
};

export const deleteLeague = async (
  leagueName: string
): Promise<ILeagueResponse> => {
  const league = await models.League.destroy({
    where: {
      leagueName,
    },
  });

  const error = new StatusError(
    new ValidationError("Primary Key not found when deleting entity")
  );

  return league ? { league: null } : { error, league: null };
};
