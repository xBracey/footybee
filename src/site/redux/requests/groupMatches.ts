import { IGroupMatchReducer } from "components/EditCard/GroupMatchEditCard/GroupMatchReducer";
import _ from "lodash";
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
  groupMatch: IGroupMatchReducer,
  groupLetter: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/groupMatch/create`, {
    data: _.pickBy({ ...groupMatch, groupLetter }, _.identity),
    method: "POST",
  });

export const putGroupMatch = async (
  state: IRootState,
  id: string,
  groupMatch: IGroupMatchReducer,
  groupLetter: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/groupMatch/${id}`, {
    data: _.pickBy({ ...groupMatch, groupLetter }, _.identity),
    method: "PUT",
  });
