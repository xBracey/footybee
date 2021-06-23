import {
  addKnockoutMatch,
  addKnockoutMatches,
  deleteKnockoutMatch,
  editKnockoutMatch,
  getAllKnockoutMatches,
  getKnockoutMatch,
  getMatchFromRound,
} from "../services";
import IKnockoutMatch, {
  isValidKnockoutMatch,
} from "../models/KnockoutMatch/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  switch (code) {
    case 0:
      return { status, error: error.message };
    case 1:
      return { status, error: "Knockout Match ID already exists" };
    case 2:
      return { status, error: error.message };
    case 3:
      return { status, error: "Knockout Match ID does not exist" };
    case 4:
      return { status, error: "Knockout Match ID does not exist" };
    case 5:
      return { status, error: error.message };
  }
};

export const createController = async (
  body: IKnockoutMatch
): Promise<controllerResponse> => {
  if (!isValidKnockoutMatch(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, knockoutMatch } = await addKnockoutMatch(body);

  if (!error) {
    return { status: 200, response: knockoutMatch };
  }

  return handleError(error);
};

export const bulkCreateController = async (body: {
  knockoutMatches: IKnockoutMatch[];
}): Promise<controllerResponse> => {
  if (
    !checkBody(body) ||
    !body.knockoutMatches ||
    !validateArrayTypeCheck(body.knockoutMatches, isValidKnockoutMatch)
  ) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, knockoutMatches } = await addKnockoutMatches(
    body.knockoutMatches
  );

  if (!error) {
    return { status: 200, response: knockoutMatches };
  }

  return handleError(error);
};

export const deleteController = async (
  id: string
): Promise<controllerResponse> => {
  const { error, knockoutMatch } = await deleteKnockoutMatch(parseInt(id));

  if (!error) {
    return { status: 200, response: knockoutMatch };
  }

  return handleError(error);
};

export const getAllController = async (): Promise<controllerResponse> => {
  const { knockoutMatches } = await getAllKnockoutMatches();

  return { status: 200, response: knockoutMatches };
};

export const getController = async (
  id: string
): Promise<controllerResponse> => {
  const { error, knockoutMatch } = await getKnockoutMatch(parseInt(id));

  if (!error) {
    return { status: 200, response: knockoutMatch };
  }

  return handleError(error);
};

export const editController = async (
  id: string,
  body: IKnockoutMatch
): Promise<controllerResponse> => {
  if (!isValidKnockoutMatch(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, knockoutMatch } = await editKnockoutMatch(parseInt(id), body);

  if (!error) {
    return { status: 200, response: knockoutMatch };
  }

  return handleError(error);
};

export const getFromRoundController = async (
  roundName: string
): Promise<controllerResponse> => {
  const { error, knockoutMatches } = await getMatchFromRound(roundName);

  if (!error) {
    return { status: 200, response: knockoutMatches };
  }

  return handleError(error);
};
