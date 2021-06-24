import _ from "lodash";
import { IAction, IReducers } from "../types";

export interface IKnockoutMatch {
  id: number;
  date: string;
  position: number;
  roundName: string;
  homeTeam: string;
  awayTeam: string;
  homeGoals: number;
  awayGoals: number;
  homePenalties: number;
  awayPenalties: number;
}

export interface IKnockoutMatches {
  loading: boolean;
  knockoutMatches: IKnockoutMatch[];
}

const initialState: IKnockoutMatches = {
  loading: false,
  knockoutMatches: [],
};

export const knockoutMatchesTypes = {
  GROUP_MATCHES_FETCHED_GROUP_MATCH: "fetchedKnockoutMatch",
  GROUP_MATCHES_FETCHED_GROUP_MATCHES: "fetchedKnockoutMatches",
  GROUP_MATCHES_LOADING_GROUP_MATCHES: "loadingKnockoutMatches",
  GROUP_MATCHES_DELETED_GROUP_MATCH: "deletedKnockoutMatch",
};

/**
 * GROUP MATCHES REDUCERS - START
 */

const loadingKnockoutMatches = state => ({ ...state, loading: true });

const fetchedKnockoutMatches = (state: IKnockoutMatches, { data }) => {
  const knockoutMatches = _.uniqBy([...data, ...state.knockoutMatches], "id");

  return { ...state, loading: false, knockoutMatches };
};

const fetchedKnockoutMatch = (state: IKnockoutMatches, { data }) => {
  const knockoutMatches = _.uniqBy([data, ...state.knockoutMatches], "id");

  return { ...state, loading: false, knockoutMatches };
};

const deletedKnockoutMatch = (state: IKnockoutMatches, { data }) => {
  const knockoutMatches = _.uniqBy([data, ...state.knockoutMatches], "id");

  return { ...state, loading: false, knockoutMatches };
};

/**
 * GROUP MATCHES REDUCERS - END
 * */

const reducers: IReducers<IKnockoutMatches> = {
  fetchedKnockoutMatches,
  loadingKnockoutMatches,
  fetchedKnockoutMatch,
  deletedKnockoutMatch,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
