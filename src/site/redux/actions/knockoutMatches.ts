import { IKnockoutMatchReducer } from "components/EditCard/KnockoutMatchEditCard/KnockoutMatchReducer";
import { types } from "../reducers";
import {
  fetchKnockoutMatches,
  fetchKnockoutMatch,
  postKnockoutMatch,
  putKnockoutMatch,
  deleteKnockoutMatch,
  fetchMatchesFromRound,
} from "../requests";
import { ThunkResult } from "../types";

export const getKnockoutMatches = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({
      type: types.knockoutMatches.GROUP_MATCHES_LOADING_GROUP_MATCHES,
    });

    return fetchKnockoutMatches(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.knockoutMatches.GROUP_MATCHES_FETCHED_GROUP_MATCHES,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const getMatchesFromRound = (roundName: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({
      type: types.knockoutMatches.GROUP_MATCHES_LOADING_GROUP_MATCHES,
    });

    return fetchMatchesFromRound(getState(), roundName).then(response =>
      !response.error
        ? dispatch({
            type: types.knockoutMatches.GROUP_MATCHES_FETCHED_GROUP_MATCHES,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const getKnockoutMatch = (id: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({
      type: types.knockoutMatches.GROUP_MATCHES_LOADING_GROUP_MATCHES,
    });

    return fetchKnockoutMatch(getState(), id).then(response =>
      !response.error
        ? dispatch({
            type: types.knockoutMatches.GROUP_MATCHES_FETCHED_GROUP_MATCH,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const saveKnockoutMatch = (
  knockoutmatch: IKnockoutMatchReducer,
  roundName: string
): ThunkResult<any> => {
  return (dispatch, getState) => {
    return postKnockoutMatch(getState(), knockoutmatch, roundName).then(
      response =>
        dispatch({
          type: types.message.MESSAGE_SET_MESSAGE,
          data: response,
        })
    );
  };
};

export const editKnockoutMatch = (
  id: string,
  knockoutmatch: IKnockoutMatchReducer,
  roundName: string
): ThunkResult<any> => {
  return (dispatch, getState) => {
    return putKnockoutMatch(getState(), id, knockoutmatch, roundName).then(
      response =>
        dispatch({
          type: types.message.MESSAGE_SET_MESSAGE,
          data: response,
        })
    );
  };
};

export const removeKnockoutMatch = (id: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    return deleteKnockoutMatch(getState(), id).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};
