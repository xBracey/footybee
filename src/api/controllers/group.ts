import {
  addGroup,
  addGroups,
  deleteGroup,
  getAllGroups,
  getGroup,
  getGroups,
} from "../services";
import IGroup, { isValidGroup } from "../models/Group/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  switch (code) {
    case 0:
      return { status, error: error.message };
    case 1:
      return { status, error: "Group letter already exists" };
    case 3:
      return { status, error: "Group letter does not exist" };
  }
};

export const createController = async (
  body: IGroup
): Promise<controllerResponse> => {
  if (!isValidGroup(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, group } = await addGroup(body);

  if (!error) {
    return { status: 200, response: group };
  }

  return handleError(error);
};

export const bulkCreateController = async (body: {
  groups: IGroup[];
}): Promise<controllerResponse> => {
  if (
    !checkBody(body) ||
    !body.groups ||
    !validateArrayTypeCheck(body.groups, isValidGroup)
  ) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, groups } = await addGroups(body.groups);

  if (!error) {
    return { status: 200, response: groups };
  }

  return handleError(error);
};

export const deleteController = async (
  letter: string
): Promise<controllerResponse> => {
  const { error, group } = await deleteGroup(letter);

  if (!error) {
    return { status: 200, response: group };
  }

  return handleError(error);
};

export const bulkGetController = async (): Promise<controllerResponse> => {
  const { groups } = await getAllGroups();

  return { status: 200, response: groups };
};

export const getController = async (
  letter: string
): Promise<controllerResponse> => {
  const { group } = await getGroup(letter);

  return { status: 200, response: group };
};
