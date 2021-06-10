import { types } from "../reducers";
import {
  fetchUser,
  fetchUserPoints,
  loginUser,
  postChangePassword,
  postDisplayName,
  postForgotPassword,
  postGoldenBoot,
  postNewLeague,
  postUserLeague,
  postVerifyUser,
  postWinner,
  registerUser,
} from "../requests";
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

    return fetchUser(getState()).then(response => {
      if (response.error) {
        window.location.href = "/login";

        return dispatch({
          type: types.auth.AUTH_RESET_AUTH,
        });
      }

      return dispatch({
        type: types.user.USER_FETCHED_USER,
        data: response,
      });
    });
  };
};

export const tryRegisterUser = (
  username: string,
  password: string,
  email: string
): ThunkResult<any> => {
  return dispatch => {
    dispatch({ type: types.user.USER_LOADING_USER });

    return registerUser(username, password, email).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const getUserPoints = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.user.USER_LOADING_USER });

    return fetchUserPoints(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.user.USER_FETCHED_USER_POINTS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const addUserLeague = (leagueCode: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.user.USER_LOADING_USER });

    return postUserLeague(getState(), leagueCode).then(response =>
      !response.error
        ? dispatch(getUser())
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const addNewLeague = (leagueName: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.user.USER_LOADING_USER });

    return postNewLeague(getState(), leagueName).then(response =>
      !response.error
        ? dispatch(getUser())
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const predictGoldenBoot = (
  winnerPrediction: string
): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.user.USER_LOADING_USER });

    return postGoldenBoot(getState(), winnerPrediction).then(response =>
      !response.error
        ? dispatch({
            type: types.user.USER_POSTED_WINNER,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const predictWinner = (winnerPrediction: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.user.USER_LOADING_USER });

    return postWinner(getState(), winnerPrediction).then(response =>
      !response.error
        ? dispatch({
            type: types.user.USER_POSTED_WINNER,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const forgotPassword = (email: string): ThunkResult<any> => {
  return dispatch => {
    return postForgotPassword(email).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const changePassword = (
  token: string,
  password: string
): ThunkResult<any> => {
  return dispatch => {
    return postChangePassword(token, password).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const verifyUser = (token: string): ThunkResult<any> => {
  return dispatch => {
    return postVerifyUser(token).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const changeDisplayName = (displayName: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    return postDisplayName(getState(), displayName).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};
