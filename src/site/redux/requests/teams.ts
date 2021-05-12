import { ITeamReducer } from "components/EditCard/TeamEditCard/TeamReducer";
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

export const deleteTeam = async (
  state: IRootState,
  name: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/team/${name}`, { method: "DELETE" });

export const postTeam = async (
  state: IRootState,
  team: ITeamReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/team`, { data: team, method: "POST" });

export const putTeam = async (
  state: IRootState,
  name: string,
  team: ITeamReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/team/${name}`, {
    data: { ...team, groupPosition: parseInt(team.groupPosition, 10) },
    method: "PUT",
  });
