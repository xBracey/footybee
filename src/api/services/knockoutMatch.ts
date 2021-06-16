import { models } from "../config";
import IKnockoutMatch from "../models/KnockoutMatch/type";
import { StatusError, updateMatchPoints } from "../lib";
import { KnockoutMatch } from "../models";
import { ValidationError } from "sequelize";
import { calculateMatchesPoints } from "../lib/calculatePoints/calculateMatchesPoints";
import { updateRanks } from "../lib/updateRanks";

interface IKnockoutMatchResponse {
  error?: StatusError;
  knockoutMatch: KnockoutMatch | null;
}

interface IKnockoutMatchesResponse {
  error?: StatusError;
  knockoutMatches: KnockoutMatch[] | null;
}

const addKnockoutMatch = async (
  knockoutMatchData: IKnockoutMatch
): Promise<IKnockoutMatchResponse> => {
  try {
    const knockoutMatch = await models.KnockoutMatch.create(knockoutMatchData);

    return { knockoutMatch };
  } catch (error) {
    return { error: new StatusError(error), knockoutMatch: null };
  }
};

const addKnockoutMatches = async (
  knockoutMatchesData: IKnockoutMatch[]
): Promise<IKnockoutMatchesResponse> => {
  try {
    const knockoutMatches = await models.KnockoutMatch.bulkCreate(
      knockoutMatchesData
    );
    return { knockoutMatches };
  } catch (error) {
    return { error: new StatusError(error), knockoutMatches: null };
  }
};

const getKnockoutMatch = async (
  id: number
): Promise<IKnockoutMatchResponse> => {
  const knockoutMatch = await models.KnockoutMatch.findOne({
    where: {
      id,
    },
  });
  return { knockoutMatch };
};

const getKnockoutMatches = async (
  ids: number[]
): Promise<IKnockoutMatchesResponse> => {
  const knockoutMatches = await models.KnockoutMatch.findAll({
    where: {
      id: ids,
    },
  });
  return { knockoutMatches };
};

const getAllKnockoutMatches = async (): Promise<IKnockoutMatchesResponse> => {
  const knockoutMatches = await models.KnockoutMatch.findAll();
  return { knockoutMatches };
};

const deleteKnockoutMatch = async (
  id: number
): Promise<IKnockoutMatchResponse> => {
  const knockoutMatch = await models.KnockoutMatch.destroy({
    where: {
      id,
    },
  });

  const error = new StatusError(
    new ValidationError("Primary Key not found when deleting entity")
  );

  return knockoutMatch
    ? { knockoutMatch: null }
    : { error, knockoutMatch: null };
};

const getMatchFromRound = async (
  roundName: string
): Promise<IKnockoutMatchesResponse> => {
  const knockoutMatches = await models.KnockoutMatch.findAll({
    where: {
      roundName,
    },
  });
  return { knockoutMatches };
};

const editKnockoutMatch = async (
  id: number,
  teamData: IKnockoutMatch
): Promise<IKnockoutMatchResponse> => {
  return { knockoutMatch: null };
};

export {
  addKnockoutMatch,
  addKnockoutMatches,
  getKnockoutMatch,
  getKnockoutMatches,
  getAllKnockoutMatches,
  deleteKnockoutMatch,
  getMatchFromRound,
  editKnockoutMatch,
};
