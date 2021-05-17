import { types } from "../reducers";
import {
  fetchGroupMatchPredictions,
  postGroupMatchPredictions,
} from "../requests";
import { ThunkResult } from "../types";
import { IPrediction } from "components/PredictionsTable";

export const getGroupMatchPredictions = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({
      type:
        types.groupMatchPredictions
          .GROUP_MATCH_PREDICTIONS_LOADING_GROUP_MATCH_PREDICTIONS,
    });

    return fetchGroupMatchPredictions(getState()).then(response =>
      !response.error
        ? dispatch({
            type:
              types.groupMatchPredictions
                .GROUP_MATCH_PREDICTIONS_FETCHED_GROUP_MATCH_PREDICTIONS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const saveGroupMatchPredictions = (
  predictions: IPrediction[]
): ThunkResult<any> => {
  return (dispatch, getState) => {
    return postGroupMatchPredictions(getState(), predictions).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};
