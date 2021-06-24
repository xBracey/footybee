import {
  addRound,
  addRounds,
  deleteRound,
  getAllRounds,
  getRound,
} from "../services";
import IRound, { isValidRound } from "../models/Round/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  switch (code) {
    case 0:
      return { status, error: error.message };
    case 1:
      return { status, error: "Round name already exists" };
    case 3:
      return { status, error: "Round name does not exist" };
  }
};

export const createController = async (
  body: IRound
): Promise<controllerResponse> => {
  if (!isValidRound(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, round } = await addRound(body);

  if (!error) {
    return { status: 200, response: round };
  }

  return handleError(error);
};

export const bulkCreateController = async (body: {
  rounds: IRound[];
}): Promise<controllerResponse> => {
  if (
    !checkBody(body) ||
    !body.rounds ||
    !validateArrayTypeCheck(body.rounds, isValidRound)
  ) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, rounds } = await addRounds(body.rounds);

  if (!error) {
    return { status: 200, response: rounds };
  }

  return handleError(error);
};

export const deleteController = async (
  name: string
): Promise<controllerResponse> => {
  const { error, round } = await deleteRound(name);

  if (!error) {
    return { status: 200, response: round };
  }

  return handleError(error);
};

export const bulkGetController = async (): Promise<controllerResponse> => {
  const { rounds } = await getAllRounds();

  return { status: 200, response: rounds };
};

export const getController = async (
  name: string
): Promise<controllerResponse> => {
  const { round } = await getRound(name);

  return { status: 200, response: round };
};
