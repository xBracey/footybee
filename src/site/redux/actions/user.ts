import { types } from "../reducers";
import { fetchUser, loginUser } from "../requests";
import { ThunkResult } from "../types";

export const tryLoginUser = (
  username: string,
  password: string
): ThunkResult<any> => {
  return dispatch => {
    dispatch({ type: types.user.USER_LOADING_USER });

    return loginUser(username, password).then(response =>
      !response.error
        ? dispatch({
            type: types.auth.AUTH_LOGGED_IN_AUTH,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const getUser = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.user.USER_LOADING_USER });

    return fetchUser(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.user.USER_FETCHED_USER,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
