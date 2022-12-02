import {
  addPlayer,
  addPlayers,
  deletePlayer,
  editPlayer,
  getAllPlayers,
  searchPlayers,
} from "../services";
import IPlayer, { isValidPlayer } from "../models/Player/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  switch (code) {
    case 0:
      return { status, error: error.message };
    case 1:
      return { status, error: "Player name already exists" };
    case 2:
      return { status, error: "Team does not exist" };
    case 3:
      return { status, error: "Player name does not exist" };
    case 4:
      return { status, error: "Player name already exists" };
  }
};

export const createController = async (
  body: IPlayer
): Promise<controllerResponse> => {
  if (!isValidPlayer(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, player } = await addPlayer(body);

  if (!error) {
    return { status: 200, response: player };
  }

  return handleError(error);
};

export const bulkCreateController = async (body: {
  players: IPlayer[];
}): Promise<controllerResponse> => {
  if (
    !checkBody(body) ||
    !body.players ||
    !validateArrayTypeCheck(body.players, isValidPlayer)
  ) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, players } = await addPlayers(body.players);

  if (!error) {
    return { status: 200, response: players };
  }

  return handleError(error);
};

export const deleteController = async (
  name: string
): Promise<controllerResponse> => {
  const { error, player } = await deletePlayer(name);

  if (!error) {
    return { status: 200, response: player };
  }

  return handleError(error);
};

export const bulkGetController = async (): Promise<controllerResponse> => {
  const { players } = await getAllPlayers();

  return { status: 200, response: players };
};

export const searchController = async (
  name: string
): Promise<controllerResponse> => {
  const { players } = await searchPlayers(name);

  return { status: 200, response: players };
};

export const editController = async (
  name: string,
  body: IPlayer
): Promise<controllerResponse> => {
  if (!isValidPlayer(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, player } = await editPlayer(name, body);

  if (!error) {
    return { status: 200, response: player };
  }

  return handleError(error);
};
