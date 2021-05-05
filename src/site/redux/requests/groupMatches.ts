import { IGroupMatchReducer } from "components/EditCard/GroupMatchEditCard/GroupMatchReducer";
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

export const deleteGroupMatch = async (
  state: IRootState,
  id: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/groupMatch/${id}`, { method: "DELETE" });

export const postGroupMatch = async (
  state: IRootState,
  groupMatch: IGroupMatchReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/groupMatch`, { data: groupMatch, method: "POST" });

export const putGroupMatch = async (
  state: IRootState,
  id: string,
  groupMatch: IGroupMatchReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/groupMatch/${id}`, {
    data: groupMatch,
    method: "PUT",
  });
