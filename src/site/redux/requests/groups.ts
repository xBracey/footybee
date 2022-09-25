import { IGroupReducer } from "components/EditCard/GroupEditCard/GroupReducer";
import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchGroups = async (state: IRootState): Promise<IAPIResponse> =>
  authorisedRequest(state, "/group");

export const fetchGroup = async (
  state: IRootState,
  letter: string
): Promise<IAPIResponse> => authorisedRequest(state, `/group/${letter}`);

export const postGroup = async (
  state: IRootState,
  group: IGroupReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/group/create`, { data: group, method: "POST" });

export const putGroup = async (
  state: IRootState,
  name: string,
  group: IGroupReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/group/${name}`, { data: group, method: "PUT" });

export const deleteGroup = async (
  state: IRootState,
  letter: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/group/${letter}`, { method: "DELETE" });
