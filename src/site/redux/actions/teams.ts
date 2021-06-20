import { ITeamReducer } from "components/EditCard/TeamEditCard/TeamReducer";
import { types } from "../reducers";
import {
  fetchTeam,
  fetchTeams,
  fetchTeamsFromGroup,
  fetchTeamsFromRound,
  deleteTeam,
  postTeam,
  putTeam,
  postTeamsPrediction,
} from "../requests";
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

export const getTeamsFromGroup = (groupLetter: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.teams.TEAMS_LOADING_TEAMS });

    return fetchTeamsFromGroup(getState(), groupLetter).then(response =>
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

export const getTeamsFromRound = (roundName: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.teams.TEAMS_LOADING_TEAMS });

    return fetchTeamsFromRound(getState(), roundName).then(response =>
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

export const saveTeam = (team: ITeamReducer): ThunkResult<any> => {
  return (dispatch, getState) => {
    return postTeam(getState(), team).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const editTeam = (
  name: string,
  team: ITeamReducer
): ThunkResult<any> => {
  return (dispatch, getState) => {
    return putTeam(getState(), name, team).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const removeTeam = (name: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    return deleteTeam(getState(), name).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const addTeamsPrediction = (names: string[]): ThunkResult<any> => {
  return (dispatch, getState) => {
    return postTeamsPrediction(getState(), names).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};
