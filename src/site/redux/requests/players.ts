import { IPlayerReducer } from "components/EditCard/PlayerEditCard/PlayerReducer";
import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchPlayers = async (state: IRootState): Promise<IAPIResponse> =>
  authorisedRequest(state, "/player");

export const fetchPlayer = async (
  state: IRootState,
  name
): Promise<IAPIResponse> => authorisedRequest(state, `/player/${name}`);

export const deletePlayer = async (
  state: IRootState,
  name: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/player/${name}`, { method: "DELETE" });

export const postPlayer = async (
  state: IRootState,
  player: IPlayerReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/player/create`, { data: player, method: "POST" });

export const putPlayer = async (
  state: IRootState,
  name: string,
  player: IPlayerReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/player/${name}`, { data: player, method: "PUT" });

export const postPlayers = async (
  state: IRootState,
  teamName: string,
  playerNames: string[]
): Promise<IAPIResponse> => {
  const players = playerNames.map(name => ({
    teamName,
    name,
  }));

  return authorisedRequest(state, `/player/bulk-create`, {
    data: { players },
    method: "POST",
  });
};
