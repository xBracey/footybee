import { models } from "../config";
import IGroupMatchPrediction from "../models/GroupMatchPrediction/type";
import { StatusError } from "../lib";
import { GroupMatchPrediction } from "../models";

interface IGroupMatchPredictionsResponse {
  error?: StatusError;
  groupMatchPredictions: GroupMatchPrediction[] | null;
}

const addGroupMatchPredictions = async (
  groupMatchPredictionsData: IGroupMatchPrediction[]
): Promise<IGroupMatchPredictionsResponse> => {
  const groupMatchPredictions = [];

  for (let index = 0; index < groupMatchPredictionsData.length; index++) {
    const groupMatchPredictionData = groupMatchPredictionsData[index];

    try {
      const groupMatchPrediction = await models.GroupMatchPrediction.upsert(
        groupMatchPredictionData
      );
      groupMatchPredictions.push(groupMatchPrediction);
    } catch (error) {
      return { error: new StatusError(error), groupMatchPredictions: null };
    }
  }

  return { groupMatchPredictions };
};

const getGroupMatchPredictions = async (
  username: string
): Promise<IGroupMatchPredictionsResponse> => {
  const groupMatchPredictions = await models.GroupMatchPrediction.findAll({
    where: {
      username,
    },
  });
  return { groupMatchPredictions };
};

export { addGroupMatchPredictions, getGroupMatchPredictions };
