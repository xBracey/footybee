import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchTeamPredictions = async (
  state: IRootState,
  username: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/teamPrediction/${username}`);

export const postTeamPredictions = async (
  state: IRootState,
  predictions: {
    [roundName: string]: string[];
  }
): Promise<IAPIResponse> => {
  const data = {
    teamPredictions: Object.entries(predictions)
      .map(([key, value]) =>
        value.map(teamName => ({
          username: state.user.username,
          teamName,
          roundName: key,
        }))
      )
      .flat(),
  };

  return authorisedRequest(
    state,
    `/teamPrediction/create`,
    {
      method: "POST",
      data,
    },
    "Knockout predictions successfully made!"
  );
};
