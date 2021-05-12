import {
  addGroupMatchPredictions,
  getGroupMatchPredictions,
} from "../services";
import IGroupMatchPrediction, {
  isValidGroupMatchPrediction,
} from "../models/GroupMatchPrediction/type";
import controllerResponse from "./controller";
import { StatusError, checkBody, validateArrayTypeCheck } from "../lib";

const handleError = (error: StatusError): controllerResponse => {
  const { status, code } = error;

  return { status, error: error.message };
};

export const bulkCreateController = async (body: {
  groupMatchPredictions: IGroupMatchPrediction[];
}): Promise<controllerResponse> => {
  if (
    !checkBody(body) ||
    !body.groupMatchPredictions ||
    !validateArrayTypeCheck(
      body.groupMatchPredictions,
      isValidGroupMatchPrediction
    )
  ) {
    return { status: 400, error: "Invalid parameters" };
  }

  const { error, groupMatchPredictions } = await addGroupMatchPredictions(
    body.groupMatchPredictions
  );

  if (!error) {
    return { status: 200, response: groupMatchPredictions };
  }

  return handleError(error);
};

export const getController = async (
  username: string
): Promise<controllerResponse> => {
  const { groupMatchPredictions } = await getGroupMatchPredictions(username);

  return { status: 200, response: groupMatchPredictions };
};
