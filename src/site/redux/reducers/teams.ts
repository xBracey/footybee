import _ from "lodash";
import { IAction, IReducers } from "../types";

interface ITeam {
  groupLetter: string;
  roundName: string;
  name: string;
  groupPosition: string;
  userPrediction?: number;
}

export interface ITeams {
  loading: boolean;
  teams: ITeam[];
}

const initialState: ITeams = {
  loading: false,
  teams: [],
};

export const teamsTypes = {
  TEAMS_FETCHED_TEAMS: "fetchedTeams",
  TEAMS_FETCHED_TEAM: "fetchedTeam",
  TEAMS_LOADING_TEAMS: "loadingTeams",
  TEAMS_FETCHED_PREDICTIONS: "fetchedTeamPredictions",
};

/**
 * TEAMS REDUCERS - START
 */

const loadingTeams = state => ({ ...state, loading: true });

const fetchedTeam = (state, { data }) => {
  const teams = _.uniqBy([data, ...state.teams], "name");

  return { ...state, loading: false, teams };
};

const fetchedTeams = (state, { data }) => {
  const teams = _.uniqBy([...data, ...state.teams], "name");

  return { ...state, loading: false, teams };
};

const fetchedTeamPredictions = (state, { data }) => {
  return { ...state };
};

/**
 * TEAMS REDUCERS - END
 * */

const reducers: IReducers<ITeams> = {
  fetchedTeams,
  fetchedTeam,
  loadingTeams,
  fetchedTeamPredictions,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
