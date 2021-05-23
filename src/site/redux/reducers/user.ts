import { IAction, IReducers } from "../types";

export interface IUser {
  username: string;
  admin: boolean;
  loading: boolean;
  points: number;
  pointsToday: number;
}

const initialState: IUser = {
  username: null,
  admin: null,
  loading: false,
  points: 0,
  pointsToday: 0,
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
  const { username, admin } = data;

  return { ...state, username, admin, loading: false };
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
