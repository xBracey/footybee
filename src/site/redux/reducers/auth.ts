import { IAction, IReducers } from "../types";

export interface IAuth {
  token: string;
}

const initialState: IAuth = {
  token: null,
};

export const authTypes = {
  AUTH_LOGGED_IN_AUTH: "loggedInAuth",
  AUTH_RESET_AUTH: "resetAuth",
};

/**
 * AUTH REDUCERS - START
 */

const resetAuth = (state, { data }) => ({
  token: null,
});

const loggedInAuth = (state, { data }) => ({
  token: data,
});

/**
 * AUTH REDUCERS - END
 * */

const reducers: IReducers<IAuth> = {
  resetAuth,
  loggedInAuth,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
