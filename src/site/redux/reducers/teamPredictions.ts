import { IAction, IReducers } from "../types";

export interface ITeamPrediction {
  username: string;
  roundName: string;
  teamName: string;
  points: number;
}

export interface ITeamPredictions {
  predictions: ITeamPrediction[];
  loading: boolean;
}

const initialState: ITeamPredictions = {
  predictions: [],
  loading: false,
};

export const teamPredictionsTypes = {
  TEAM_PREDICTIONS_FETCHED_TEAM_PREDICTIONS: "fetchedTeamPredictions",
  TEAM_PREDICTIONS_LOADING_TEAM_PREDICTIONS: "loadingTeamPredictions",
};

/**
 * TEAM PREDICTIONS REDUCERS - START
 */

const loadingTeamPredictions = state => ({ ...state, loading: true });

const fetchedTeamPredictions = (state, { data }) => {
  return { ...state, loading: false, predictions: data };
};

/**
 * TEAM PREDICTIONS REDUCERS - END
 * */

const reducers: IReducers<ITeamPredictions> = {
  fetchedTeamPredictions,
  loadingTeamPredictions,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
