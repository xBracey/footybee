import { IGroupReducer } from "components/EditCard/GroupEditCard/GroupReducer";
import { types } from "../reducers";
import { fetchGroups, postGroup, deleteGroup, putGroup } from "../requests";
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

export const saveGroup = (group: IGroupReducer): ThunkResult<any> => {
  return (dispatch, getState) => {
    return postGroup(getState(), group).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const editGroup = (
  name: string,
  group: IGroupReducer
): ThunkResult<any> => {
  return (dispatch, getState) => {
    return putGroup(getState(), name, group).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};

export const removeGroup = (letter: string): ThunkResult<any> => {
  return (dispatch, getState) => {
    return deleteGroup(getState(), letter).then(response =>
      dispatch({
        type: types.message.MESSAGE_SET_MESSAGE,
        data: response,
      })
    );
  };
};
