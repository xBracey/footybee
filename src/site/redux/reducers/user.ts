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
  goldenBootPrediction: string;
  winnerPrediction: string;
}

const initialState: IUser = {
  username: null,
  admin: null,
  loading: false,
  points: 0,
  pointsToday: 0,
  userLeagues: [],
  goldenBootPrediction: null,
  winnerPrediction: null,
};

export const userTypes = {
  USER_FETCHED_USER: "fetchedUser",
  USER_LOADING_USER: "loadingUser",
  USER_FETCHED_USER_POINTS: "fetchedUserPoints",
  USER_POSTED_GOLDEN_BOOT: "postedGoldenBoot",
  USER_POSTED_WINNER: "postedWinner",
};

/**
 * USER REDUCERS - START
 */

const loadingUser = state => ({ ...state, loading: true });

const fetchedUser = (state, { data }) => {
  const {
    username,
    admin,
    leagues,
    goldenBootPrediction,
    winnerPrediction,
  } = data;

  const userLeagues = leagues
    ? leagues.map(league => ({
        rank: league.UserLeague.rank,
        name: league.leagueName,
      }))
    : [];

  return {
    ...state,
    username,
    admin,
    userLeagues,
    goldenBootPrediction,
    winnerPrediction,
    loading: false,
  };
};

const fetchedUserPoints = (state, { data }) => {
  const { points, pointsToday } = data;

  return { ...state, points, pointsToday, loading: false };
};

const postedGoldenBoot = (state, { data }) => ({
  ...state,
  goldenBootPrediction: data.goldenBootPrediction,
  loading: false,
});

const postedWinner = (state, { data }) => ({
  ...state,
  winnerPrediction: data.winnerPrediction,
  loading: false,
});

/**
 * USER REDUCERS - END
 * */

const reducers: IReducers<IUser> = {
  fetchedUser,
  loadingUser,
  fetchedUserPoints,
  postedGoldenBoot,
  postedWinner,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
