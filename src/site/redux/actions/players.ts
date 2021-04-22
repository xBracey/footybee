import { types } from "../reducers";
import { fetchPlayers } from "../requests";
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
