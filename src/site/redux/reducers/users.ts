import { IAction, IReducers } from "../types";
import { IGroupMatchPrediction } from "./groupMatchPredictions";

export interface IUser {
  username: string;
  displayName: string;
  points: number;
  goldenBootPrediction: string;
  winnerPrediction: string;
  predictions: IGroupMatchPrediction[];
}

export const defaultUser: IUser = {
  username: null,
  displayName: null,
  points: 0,
  goldenBootPrediction: null,
  winnerPrediction: null,
  predictions: [],
};

export interface IUsers {
  loading: boolean;
  users: {
    [username: string]: IUser;
  };
}

const initialState: IUsers = {
  loading: false,
  users: {},
};

export const usersTypes = {
  USERS_FETCHED_USER: "fetchedProfileUser",
  USERS_LOADING_USERS: "loadingUsers",
  USERS_FETCHED_USER_PREDICTIONS: "fetchedUserPredictions",
};

/**
 * USER REDUCERS - START
 */

const loadingUsers = state => ({ ...state, loading: true });

const fetchedProfileUser = (state, { data }) => {
  const {
    username,
    displayName,
    points,
    goldenBootPrediction,
    winnerPrediction,
  } = data;

  const users = {
    ...state.users,
    [username]: {
      username,
      displayName,
      points,
      goldenBootPrediction,
      winnerPrediction,
      predictions: [],
    },
  };

  return {
    ...state,
    users,
    loading: false,
  };
};

const fetchedUserPredictions = (state, { data }) => {
  const { username, predictions } = data;

  const predictionsFormatted = predictions.map(prediction => ({
    ...prediction,
    homeGoals: prediction.homeGoals.toString(),
    awayGoals: prediction.awayGoals.toString(),
  }));

  const users = {
    ...state.users,
    [username]: {
      ...state.users[username],
      predictions: predictionsFormatted,
    },
  };

  return {
    ...state,
    users,
    loading: false,
  };
};

/**
 * USER REDUCERS - END
 * */

const reducers: IReducers<IUsers> = {
  fetchedProfileUser,
  loadingUsers,
  fetchedUserPredictions,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
