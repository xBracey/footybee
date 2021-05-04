import { authorisedRequest } from "../api";
import { IRootState } from "../reducers";
import { IAPIResponse } from "../types";

export const fetchTeams = async (state: IRootState): Promise<IAPIResponse> =>
  authorisedRequest(state, "/team");

export const fetchTeam = async (
  state: IRootState,
  name: string
): Promise<IAPIResponse> => authorisedRequest(state, `/team/${name}`);

export const fetchTeamsFromGroup = async (
  state: IRootState,
  letter: string
): Promise<IAPIResponse> => authorisedRequest(state, `/team/group/${letter}`);
