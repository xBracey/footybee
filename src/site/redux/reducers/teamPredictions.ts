import { IAction, IReducers } from "../types";

export interface ITeamPredictions {
  id: string;
  loading: boolean;
}

const initialState: ITeamPredictions = {
  id: null,
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
  return { ...state, loading: false };
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
