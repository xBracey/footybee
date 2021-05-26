import { IAction, IReducers } from "../types";

export interface IUserLeagues {
  rank: number;
  name: string;
}

export interface IUser {
  username: string;
  admin: boolean;
  loading: boolean;
  points: number;
  pointsToday: number;
  userLeagues: IUserLeagues[];
}

const initialState: IUser = {
  username: null,
  admin: null,
  loading: false,
  points: 0,
  pointsToday: 0,
  userLeagues: [],
};

export const userTypes = {
  USER_FETCHED_USER: "fetchedUser",
  USER_LOADING_USER: "loadingUser",
  USER_FETCHED_USER_POINTS: "fetchedUserPoints",
};

/**
 * USER REDUCERS - START
 */

const loadingUser = state => ({ ...state, loading: true });

const fetchedUser = (state, { data }) => {
  const { username, admin, leagues } = data;

  const userLeagues = leagues
    ? leagues.map(league => ({
        rank: league.UserLeague.rank,
        name: league.leagueName,
      }))
    : [];

  return { ...state, username, admin, userLeagues, loading: false };
};

const fetchedUserPoints = (state, { data }) => {
  const { points, pointsToday } = data;

  return { ...state, points, pointsToday, loading: false };
};

/**
 * USER REDUCERS - END
 * */

const reducers: IReducers<IUser> = {
  fetchedUser,
  loadingUser,
  fetchedUserPoints,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
