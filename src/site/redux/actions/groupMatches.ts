import { types } from "../reducers";
import {
  fetchGroupMatches,
  fetchMatchesFromGroup,
  fetchGroupMatch,
} from "../requests";
import { ThunkResult } from "../types";

export const getGroupMatches = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.groupMatches.GROUP_MATCHES_LOADING_GROUP_MATCHES });

    return fetchGroupMatches(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.groupMatches.GROUP_MATCHES_FETCHED_GROUP_MATCHES,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const getMatchesFromGroup = (groupLetter: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.groupMatches.GROUP_MATCHES_LOADING_GROUP_MATCHES });

    return fetchMatchesFromGroup(getState(), groupLetter).then(response =>
      !response.error
        ? dispatch({
            type: types.groupMatches.GROUP_MATCHES_FETCHED_GROUP_MATCHES,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const getGroupMatch = (id: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.groupMatches.GROUP_MATCHES_LOADING_GROUP_MATCHES });

    return fetchGroupMatch(getState(), id).then(response =>
      !response.error
        ? dispatch({
            type: types.groupMatches.GROUP_MATCHES_FETCHED_GROUP_MATCH,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
