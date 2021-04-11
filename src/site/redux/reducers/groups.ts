import { IAction, IReducers } from "../types";

interface IGroup {
  letter: string;
}

export interface IGroups {
  id: string;
  loading: boolean;
  groups: IGroup[];
}

const initialState: IGroups = {
  id: null,
  loading: false,
  groups: [],
};

export const groupsTypes = {
  GROUPS_FETCHED_GROUPS: "fetchedGroups",
  GROUPS_LOADING_GROUPS: "loadingGroups",
};

/**
 * GROUPS REDUCERS - START
 */

const loadingGroups = state => ({ ...state, loading: true });

const fetchedGroups = (state, { data }) => {
  return { ...state, loading: false, groups: data };
};

/**
 * GROUPS REDUCERS - END
 * */

const reducers: IReducers<IGroups> = {
  fetchedGroups,
  loadingGroups,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
