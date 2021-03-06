import {
  addGroupMatch,
  addGroupMatches,
  deleteGroupMatch,
  editGroupMatch,
  getAllGroupMatches,
  getGroupMatch,
  getMatchFromGroup,
} from "../services";
import IGroupMatch, { isValidGroupMatch } from "../models/GroupMatch/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  switch (code) {
    case 0:
      return { status, error: error.message };
    case 1:
      return { status, error: "GroupMatch ID already exists" };
    case 2:
      return { status, error: error.message };
    case 3:
      return { status, error: "Group Match ID does not exist" };
    case 4:
      return { status, error: "Group Match ID does not exist" };
    case 5:
      return { status, error: error.message };
  }
};

export const createController = async (
  body: IGroupMatch
): Promise<controllerResponse> => {
  if (!isValidGroupMatch(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, groupMatch } = await addGroupMatch(body);

  if (!error) {
    return { status: 200, response: groupMatch };
  }

  return handleError(error);
};

export const bulkCreateController = async (body: {
  groupMatches: IGroupMatch[];
}): Promise<controllerResponse> => {
  if (
    !checkBody(body) ||
    !body.groupMatches ||
    !validateArrayTypeCheck(body.groupMatches, isValidGroupMatch)
  ) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, groupMatches } = await addGroupMatches(body.groupMatches);

  if (!error) {
    return { status: 200, response: groupMatches };
  }

  return handleError(error);
};

export const deleteController = async (
  id: string
): Promise<controllerResponse> => {
  const { error, groupMatch } = await deleteGroupMatch(parseInt(id));

  if (!error) {
    return { status: 200, response: groupMatch };
  }

  return handleError(error);
};

export const getAllController = async (): Promise<controllerResponse> => {
  const { groupMatches } = await getAllGroupMatches();

  return { status: 200, response: groupMatches };
};

export const getController = async (
  id: string
): Promise<controllerResponse> => {
  const { error, groupMatch } = await getGroupMatch(parseInt(id));

  if (!error) {
    return { status: 200, response: groupMatch };
  }

  return handleError(error);
};

export const getFromGroupController = async (
  groupLetter: string
): Promise<controllerResponse> => {
  const { error, groupMatches } = await getMatchFromGroup(groupLetter);

  if (!error) {
    return { status: 200, response: groupMatches };
  }

  return handleError(error);
};

export const editController = async (
  id: string,
  body: IGroupMatch
): Promise<controllerResponse> => {
  if (!isValidGroupMatch(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, groupMatch } = await editGroupMatch(parseInt(id), body);

  if (!error) {
    return { status: 200, response: groupMatch };
  }

  return handleError(error);
};
