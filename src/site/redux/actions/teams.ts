import { types } from "../reducers";
import { fetchTeam, fetchTeams } from "../requests";
import { ThunkResult } from "../types";

export const getTeams = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.teams.TEAMS_LOADING_TEAMS });

    return fetchTeams(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.teams.TEAMS_FETCHED_TEAMS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const getTeam = (name: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.teams.TEAMS_LOADING_TEAMS });

    return fetchTeam(getState(), name).then(response =>
      !response.error
        ? dispatch({
            type: types.teams.TEAMS_FETCHED_TEAM,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
