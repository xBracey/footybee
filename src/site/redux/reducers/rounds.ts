import { IAction, IReducers } from "../types";

interface IRound {
  name: string;
}

export interface IRounds {
  loading: boolean;
  rounds: IRound[];
}

const initialState: IRounds = {
  loading: false,
  rounds: [],
};

export const roundsTypes = {
  ROUNDS_FETCHED_ROUNDS: "fetchedRounds",
  ROUNDS_LOADING_ROUNDS: "loadingRounds",
};

/**
 * ROUNDS REDUCERS - START
 */

const loadingRounds = state => ({ ...state, loading: true });

const fetchedRounds = (state, { data }) => {
  return { ...state, loading: false, rounds: data };
};

/**
 * ROUNDS REDUCERS - END
 * */

const reducers: IReducers<IRounds> = {
  fetchedRounds,
  loadingRounds,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
