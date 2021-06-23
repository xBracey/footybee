import { IRoundReducer } from "components/EditCard/RoundEditCard/RoundReducer";
import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchRounds = async (state: IRootState): Promise<IAPIResponse> =>
  authorisedRequest(state, "/round");

export const fetchRound = async (
  state: IRootState,
  letter: string
): Promise<IAPIResponse> => authorisedRequest(state, `/round/${letter}`);

export const postRound = async (
  state: IRootState,
  round: IRoundReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/round`, { data: round, method: "POST" });

export const putRound = async (
  state: IRootState,
  name: string,
  round: IRoundReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/round/${name}`, { data: round, method: "PUT" });

export const deleteRound = async (
  state: IRootState,
  letter: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/round/${letter}`, { method: "DELETE" });
