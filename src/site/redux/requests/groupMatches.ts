import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchGroupMatches = async (
  state: IRootState
): Promise<IAPIResponse> => authorisedRequest(state, "/groupMatch");

export const fetchMatchesFromGroup = async (
  state: IRootState,
  groupLetter: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/groupMatch/group/${groupLetter}`);

export const fetchGroupMatch = async (
  state: IRootState,
  id: string
): Promise<IAPIResponse> => authorisedRequest(state, `/groupMatch/${id}`);
