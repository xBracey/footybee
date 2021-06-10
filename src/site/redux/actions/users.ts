import { types } from "../reducers";
import { fetchProfileUser, fetchProfilePredictions } from "../requests";
import { ThunkResult } from "../types";

export const getProfileUser = (username: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.users.USERS_LOADING_USERS });

    return fetchProfileUser(getState(), username).then(response =>
      !response.error
        ? dispatch({
            type: types.users.USERS_FETCHED_USER,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const getProfilePredictions = (username: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.users.USERS_LOADING_USERS });

    return fetchProfilePredictions(getState(), username).then(response =>
      !response.error
        ? dispatch({
            type: types.users.USERS_FETCHED_USER_PREDICTIONS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
