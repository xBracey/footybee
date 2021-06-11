import { IAction, IReducers } from "../types";

export interface IGroupMatchPrediction {
  username: string;
  groupMatchId: number;
  homeGoals: string;
  awayGoals: string;
  points: number;
}

export interface IGroupMatchPredictions {
  loading: boolean;
  predictions: IGroupMatchPrediction[];
}

const initialState: IGroupMatchPredictions = {
  loading: false,
  predictions: [],
};

export const groupMatchPredictionsTypes = {
  GROUP_MATCH_PREDICTIONS_FETCHED_GROUP_MATCH_PREDICTIONS:
    "fetchedGroupMatchPredictions",
  GROUP_MATCH_PREDICTIONS_LOADING_GROUP_MATCH_PREDICTIONS:
    "loadingGroupMatchPredictions",
};

/**
 * GROUP_MATCH_PREDICTIONS REDUCERS - START
 */

const loadingGroupMatchPredictions = state => ({ ...state, loading: true });

const fetchedGroupMatchPredictions = (state, { data }) => {
  const predictions = data.map(prediction => ({
    ...prediction,
    homeGoals: prediction.homeGoals.toString(),
    awayGoals: prediction.awayGoals.toString(),
  }));

  return { ...state, predictions };
};

/**
 * GROUP_MATCH_PREDICTIONS REDUCERS - END
 * */

const reducers: IReducers<IGroupMatchPredictions> = {
  fetchedGroupMatchPredictions,
  loadingGroupMatchPredictions,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
