import { addLeague, addLeagues, deleteLeague } from "../services";
import ILeague, { isValidLeague } from "../models/League/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  switch (code) {
    case 0:
      return { status, error: error.message };
    case 1:
      return { status, error: "League Name already exists" };
    case 3:
      return { status, error: "League Name does not exist" };
  }
};

export const createController = async (
  body: ILeague
): Promise<controllerResponse> => {
  if (!isValidLeague(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, league } = await addLeague(body);

  if (!error) {
    return { status: 200, response: league };
  }

  return handleError(error);
};

export const bulkCreateController = async (body: {
  leagues: ILeague[];
}): Promise<controllerResponse> => {
  if (
    !checkBody(body) ||
    !body.leagues ||
    !validateArrayTypeCheck(body.leagues, isValidLeague)
  ) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, leagues } = await addLeagues(body.leagues);

  if (!error) {
    return { status: 200, response: leagues };
  }

  return handleError(error);
};

export const deleteController = async (
  leagueName: string
): Promise<controllerResponse> => {
  const { error, league } = await deleteLeague(leagueName);

  if (!error) {
    return { status: 200, response: league };
  }

  return handleError(error);
};
