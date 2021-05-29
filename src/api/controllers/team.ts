import {
  addTeam,
  deleteTeam,
  editTeam,
  getAllTeams,
  getTeam,
  getTeamsFromGroup,
} from "../services";
import ITeam, { isValidTeam } from "../models/Team/type";
import controllerResponse from "./controller";
import { StatusError } from "../lib";
import _ from "lodash";
import { TeamPrediction, User } from "../models";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  switch (code) {
    case 0:
      return { status, error: error.message };
    case 1:
      return { status, error: "Team name already exists" };
    case 3:
      return { status, error: "Team name does not exist" };
    case 4:
      return { status, error: "Team name already exists" };
  }
};

export const createController = async (
  body: ITeam
): Promise<controllerResponse> => {
  if (!isValidTeam(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, team } = await addTeam(body);

  if (!error) {
    return { status: 200, response: team };
  }

  return handleError(error);
};

export const editController = async (
  name: string,
  body: ITeam
): Promise<controllerResponse> => {
  if (!isValidTeam(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, team } = await editTeam(name, body);

  if (!error) {
    return { status: 200, response: team };
  }

  return handleError(error);
};

export const deleteController = async (
  name: string
): Promise<controllerResponse> => {
  const { error, team } = await deleteTeam(name);

  if (!error) {
    return { status: 200, response: team };
  }

  return handleError(error);
};

export const bulkGetController = async (
  username: string
): Promise<controllerResponse> => {
  const { teams } = await getAllTeams();

  const response = teams.map(team => {
    // @ts-ignore
    const userPrediction: User & {
      TeamPrediction: TeamPrediction;
    } = team.usersPredictions.find(
      prediction => prediction.username === username
    );

    return {
      ..._.pick(team, ["groupLetter", "groupPosition", "name"]),
      userPrediction: userPrediction?.TeamPrediction?.groupPosition,
    };
  });

  return { status: 200, response };
};

export const getController = async (
  name: string
): Promise<controllerResponse> => {
  const { team } = await getTeam(name);

  return { status: 200, response: team };
};

export const getFromGroupController = async (
  groupLetter: string
): Promise<controllerResponse> => {
  const { teams } = await getTeamsFromGroup(groupLetter);

  return { status: 200, response: teams };
};
