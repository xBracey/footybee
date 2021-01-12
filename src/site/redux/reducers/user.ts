import { IAction, IReducers } from "../types";

export interface IUser {
  username: string;
  loading: boolean;
}

const initialState: IUser = {
  username: null,
  loading: false,
};

export const userTypes = {
  USER_FETCHED_USER: "fetchedUser",
  USER_LOADING_USER: "loadingUser",
};

/**
 * USER REDUCERS - START
 */

const loadingUser = state => ({ ...state, loading: true });

const fetchedUser = (state, { data }) => {
  const { username } = data;

  return { ...state, username, loading: false };
};

/**
 * USER REDUCERS - END
 * */

const reducers: IReducers<IUser> = {
  fetchedUser,
  loadingUser,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
