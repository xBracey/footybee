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

export const fetchTeamsFromRound = async (
  state: IRootState,
  roundName: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/team/round/${roundName}`);

export const deleteTeam = async (
  state: IRootState,
  name: string
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/team/${name}`, { method: "DELETE" });

export const postTeam = async (
  state: IRootState,
  team: ITeamReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/team/create`, {
    data: { ...team, roundName: team?.roundName?.value },
    method: "POST",
  });

export const putTeam = async (
  state: IRootState,
  name: string,
  team: ITeamReducer
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/team/${name}`, {
    data: {
      ...team,
      groupPosition: parseInt(team.groupPosition, 10),
      roundName: team?.roundName?.value,
      wins: parseInt(team.wins) ?? 0,
    },
    method: "PUT",
  });

export const postTeamsPrediction = async (
  state: IRootState,
  names: string[]
): Promise<IAPIResponse> =>
  authorisedRequest(state, `/teamPrediction/create`, {
    data: {
      teamPredictions: names.map((teamName, index) => ({
        username: state.user.username,
        teamName,
        groupPosition: index + 1,
        roundName: "Group Stage",
      })),
    },
    method: "POST",
  });
