import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchProfileUser = async (
  state: IRootState,
  username: string
): Promise<IAPIResponse> => authorisedRequest(state, `/user/${username}`);

export const fetchProfilePredictions = async (
  state: IRootState,
  username: string
): Promise<IAPIResponse> => {
  const response = await authorisedRequest(
    state,
    `/groupMatchPrediction/${username}`
  );

  return { ...response, data: { username, predictions: response.data } };
};
