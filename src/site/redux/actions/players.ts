import { IPlayerReducer } from "components/EditCard/PlayerEditCard/PlayerReducer";
import { types } from "../reducers";
import {
  deletePlayer,
  fetchPlayer,
  fetchPlayers,
  postPlayer,
  postPlayers,
  putPlayer,
} from "../requests";
import { ThunkResult } from "../types";

export const getPlayers = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.players.PLAYERS_LOADING_PLAYERS });

    return fetchPlayers(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.players.PLAYERS_FETCHED_PLAYERS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const getPlayer = (name: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.players.PLAYERS_LOADING_PLAYERS });

    return fetchPlayer(getState(), name).then(response =>
      !response.error
        ? dispatch({
            type: types.players.PLAYERS_FETCHED_PLAYER,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const savePlayer = (player: IPlayerReducer): ThunkResult<any> => {
  return (dispatch, getState) => {
    return postPlayer(getState(), player).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const savePlayers = (
  teamName: string,
  playerNames: string[]
): ThunkResult<any> => {
  return (dispatch, getState) => {
    return postPlayers(getState(), teamName, playerNames).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const editPlayer = (
  name: string,
  player: IPlayerReducer
): ThunkResult<any> => {
  return (dispatch, getState) => {
    return putPlayer(getState(), name, player).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const removePlayer = (name: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    return deletePlayer(getState(), name).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};
