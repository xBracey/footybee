import { types } from "../reducers";
import { fetchTeams } from "../requests";
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
