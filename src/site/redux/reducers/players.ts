import { IAction, IReducers } from "../types";

export interface IPlayer {
  name: string;
  teamName: string;
}

export interface IPlayers {
  loading: boolean;
  players: IPlayer[];
}

const initialState: IPlayers = {
  loading: false,
  players: [],
};

export const playersTypes = {
  PLAYERS_FETCHED_PLAYERS: "fetchedPlayers",
  PLAYERS_LOADING_PLAYERS: "loadingPlayers",
};

/**
 * PLAYERS REDUCERS - START
 */

const loadingPlayers = state => ({ ...state, loading: true });

const fetchedPlayers = (state, { data }) => {
  return { ...state, loading: false, players: data };
};

/**
 * PLAYERS REDUCERS - END
 * */

const reducers: IReducers<IPlayers> = {
  fetchedPlayers,
  loadingPlayers,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
