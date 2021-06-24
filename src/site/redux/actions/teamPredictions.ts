import { types } from "../reducers";
import { fetchTeamPredictions, postTeamPredictions } from "../requests";
import { ThunkResult } from "../types";

export const getTeamPredictions = (username: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({
      type: types.teamPredictions.TEAM_PREDICTIONS_LOADING_TEAM_PREDICTIONS,
    });

    return fetchTeamPredictions(getState(), username).then(response =>
      !response.error
        ? dispatch({
            type:
              types.teamPredictions.TEAM_PREDICTIONS_FETCHED_TEAM_PREDICTIONS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const makeTeamPredictions = (predictions: {
  [roundName: string]: string[];
}): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({
      type: types.teamPredictions.TEAM_PREDICTIONS_LOADING_TEAM_PREDICTIONS,
    });

    return postTeamPredictions(getState(), predictions).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};
