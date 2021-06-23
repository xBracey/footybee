import { IRoundReducer } from "components/EditCard/RoundEditCard/RoundReducer";
import { types } from "../reducers";
import { fetchRounds, postRound, deleteRound, putRound } from "../requests";
import { ThunkResult } from "../types";

export const getRounds = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.rounds.ROUNDS_LOADING_ROUNDS });

    return fetchRounds(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.rounds.ROUNDS_FETCHED_ROUNDS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};

export const saveRound = (round: IRoundReducer): ThunkResult<any> => {
  return (dispatch, getState) => {
    return postRound(getState(), round).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const editRound = (
  name: string,
  round: IRoundReducer
): ThunkResult<any> => {
  return (dispatch, getState) => {
    return putRound(getState(), name, round).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const removeRound = (letter: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    return deleteRound(getState(), letter).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};
