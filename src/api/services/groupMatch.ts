import { models } from "../config";
import IGroupMatch from "../models/GroupMatch/type";
import { StatusError, updatePoints } from "../lib";
import { GroupMatch } from "../models";
import { ValidationError } from "sequelize";
import { calculateMatchesPoints } from "../lib/calculatePoints/calculateMatchesPoints";
import { updateRanks } from "../lib/updateRanks";

interface IGroupMatchResponse {
  error?: StatusError;
  groupMatch: GroupMatch | null;
}

interface IGroupMatchesResponse {
  error?: StatusError;
  groupMatches: GroupMatch[] | null;
}

const addGroupMatch = async (
  groupMatchData: IGroupMatch
): Promise<IGroupMatchResponse> => {
  try {
    const groupMatch = await models.GroupMatch.create(groupMatchData);

    return { groupMatch };
  } catch (error) {
    return { error: new StatusError(error), groupMatch: null };
  }
};

const addGroupMatches = async (
  groupMatchesData: IGroupMatch[]
): Promise<IGroupMatchesResponse> => {
  try {
    const groupMatches = await models.GroupMatch.bulkCreate(groupMatchesData);
    return { groupMatches };
  } catch (error) {
    return { error: new StatusError(error), groupMatches: null };
  }
};

const getGroupMatch = async (id: number): Promise<IGroupMatchResponse> => {
  const groupMatch = await models.GroupMatch.findOne({
    where: {
      id,
    },
  });
  return { groupMatch };
};

const getGroupMatches = async (
  ids: number[]
): Promise<IGroupMatchesResponse> => {
  const groupMatches = await models.GroupMatch.findAll({
    where: {
      id: ids,
    },
  });
  return { groupMatches };
};

const getAllGroupMatches = async (): Promise<IGroupMatchesResponse> => {
  const groupMatches = await models.GroupMatch.findAll();
  return { groupMatches };
};

const deleteGroupMatch = async (id: number): Promise<IGroupMatchResponse> => {
  const groupMatch = await models.GroupMatch.destroy({
    where: {
      id,
    },
  });

  const error = new StatusError(
    new ValidationError("Primary Key not found when deleting entity")
  );

  return groupMatch ? { groupMatch: null } : { error, groupMatch: null };
};

const getMatchFromGroup = async (
  groupLetter: string
): Promise<IGroupMatchesResponse> => {
  const groupMatches = await models.GroupMatch.findAll({
    where: {
      groupLetter,
    },
  });
  return { groupMatches };
};

const editGroupMatch = async (
  id: number,
  teamData: IGroupMatch
): Promise<IGroupMatchResponse> => {
  try {
    const groupMatch = await models.GroupMatch.findOne({
      where: {
        id,
      },
    });

    groupMatch.update(teamData);

    const predictions = await models.GroupMatchPrediction.findAll({
      where: {
        groupMatchId: id,
      },
    });

    const newPoints = calculateMatchesPoints(groupMatch, predictions);

    for (let index = 0; index < predictions.length; index++) {
      const prediction = predictions[index];
      await prediction.update({ points: newPoints[index] });
    }

    await updatePoints();
    await updateRanks();

    return { groupMatch };
  } catch (error) {
    return { error: new StatusError(error), groupMatch: null };
  }
};

export {
  addGroupMatch,
  addGroupMatches,
  getGroupMatch,
  getGroupMatches,
  getAllGroupMatches,
  deleteGroupMatch,
  getMatchFromGroup,
  editGroupMatch,
};
