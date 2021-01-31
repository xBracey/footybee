import { addPlayer, addPlayers, deletePlayer } from "../services";
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

export const deleteController = async (
  name: string
): Promise<controllerResponse> => {
  const { error, player } = await deletePlayer(name);

  if (!error) {
    return { status: 200, response: player };
  }

  return handleError(error);
};
