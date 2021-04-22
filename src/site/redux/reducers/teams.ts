import { IAction, IReducers } from "../types";

interface ITeam {
  groupLetter: string;
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
  TEAMS_LOADING_TEAMS: "loadingTeams",
};

/**
 * TEAMS REDUCERS - START
 */

const loadingTeams = state => ({ ...state, loading: true });

const fetchedTeams = (state, { data }) => {
  return { ...state, loading: false, teams: data };
};

/**
 * TEAMS REDUCERS - END
 * */

const reducers: IReducers<ITeams> = {
  fetchedTeams,
  loadingTeams,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
