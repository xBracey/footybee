import _ from "lodash";
import { IAction, IReducers } from "../types";

interface ITeam {
  groupLetter: string;
  name: string;
  groupPosition: number;
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

/**
 * TEAMS REDUCERS - END
 * */

const reducers: IReducers<ITeams> = {
  fetchedTeams,
  fetchedTeam,
  loadingTeams,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
