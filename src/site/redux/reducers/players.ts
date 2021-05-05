import _ from "lodash";
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
  PLAYERS_FETCHED_PLAYER: "fetchedPlayer",
  PLAYERS_LOADING_PLAYERS: "loadingPlayers",
};

/**
 * PLAYERS REDUCERS - START
 */

const loadingPlayers = state => ({ ...state, loading: true });

const fetchedPlayers = (state, { data }) => {
  const players = _.uniqBy([...data, ...state.players], "name");

  return { ...state, loading: false, players };
};

const fetchedPlayer = (state: IPlayers, { data }) => {
  const players = _.uniqBy([data, ...state.players], "name");

  return { ...state, loading: false, players };
};

/**
 * PLAYERS REDUCERS - END
 * */

const reducers: IReducers<IPlayers> = {
  fetchedPlayers,
  fetchedPlayer,
  loadingPlayers,
};

export default (state = initialState, action: IAction) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.data)
    : state;
};
