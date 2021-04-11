import { types } from "../reducers";
import { fetchGroups } from "../requests";
import { ThunkResult } from "../types";

export const getGroups = (): ThunkResult<any> => {
  return (dispatch, getState) => {
    dispatch({ type: types.groups.GROUPS_LOADING_GROUPS });

    return fetchGroups(getState()).then(response =>
      !response.error
        ? dispatch({
            type: types.groups.GROUPS_FETCHED_GROUPS,
            data: response,
          })
        : dispatch({
            type: types.message.MESSAGE_SET_MESSAGE,
            data: response,
          })
    );
  };
};
