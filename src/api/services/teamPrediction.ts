import { models } from "../config";
import ITeamPrediction from "../models/TeamPrediction/type";
import { StatusError } from "../lib";
import { TeamPrediction } from "../models";

interface ITeamPredictionsResponse {
  error?: StatusError;
  teamPredictions: TeamPrediction[] | null;
}

const addTeamPredictions = async (
  teamPredictionsData: ITeamPrediction[]
): Promise<ITeamPredictionsResponse> => {
  const teamPredictions = [];

  for (let index = 0; index < teamPredictionsData.length; index++) {
    const teamPredictionData = teamPredictionsData[index];

    try {
      const teamPrediction = await models.TeamPrediction.upsert(
        teamPredictionData
      );
      teamPredictions.push(teamPrediction);
    } catch (error) {
      return { error: new StatusError(error), teamPredictions: null };
    }
  }

  return { teamPredictions };
};

const getTeamPredictions = async (
  username
): Promise<ITeamPredictionsResponse> => {
  const teamPredictions = await models.TeamPrediction.findAll({
    where: {
      username,
    },
  });
  return { teamPredictions };
};

export { addTeamPredictions, getTeamPredictions };
