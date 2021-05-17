import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";
import { IPrediction } from "components/PredictionsTable";

export const fetchGroupMatchPredictions = async (
  state: IRootState
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/groupMatchPrediction/${state.user.username}`);

export const postGroupMatchPredictions = async (
  state: IRootState,
  predictions: IPrediction[]
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/groupMatchPrediction/create`, {
    method: "POST",
    data: {
      groupMatchPredictions: predictions.map(prediction => ({
        groupMatchId: prediction.groupMatchId,
        homeGoals: parseInt(prediction.homeGoals),
        awayGoals: parseInt(prediction.awayGoals),
        username: state.user.username,
      })),
    },
  });
