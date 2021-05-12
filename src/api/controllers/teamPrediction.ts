import { getTeamPredictions, addTeamPredictions } from "../services";
import ITeamPrediction, {
  isValidTeamPrediction,
} from "../models/TeamPrediction/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status } = error;

  return { status, error: error.message };
};

export const bulkCreateController = async (body: {
  teamPredictions: ITeamPrediction[];
}): Promise<controllerResponse> => {
  if (
    !checkBody(body) ||
    !body.teamPredictions ||
    !validateArrayTypeCheck(body.teamPredictions, isValidTeamPrediction)
  ) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, teamPredictions } = await addTeamPredictions(
    body.teamPredictions
  );

  if (!error) {
    return { status: 200, response: teamPredictions };
  }

  return handleError(error);
};

export const getController = async (
  username: string
): Promise<controllerResponse> => {
  const { teamPredictions } = await getTeamPredictions(username);

  return { status: 200, response: teamPredictions };
};
