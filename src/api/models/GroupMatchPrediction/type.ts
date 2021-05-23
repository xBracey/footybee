import { validateType } from "../../lib";

export default interface IGroupMatchPrediction {
  username: string;
  groupMatchId: number;
  homeGoals: number;
  awayGoals: number;
  points?: number;
}

export const isValidGroupMatchPrediction = (
  data: any
): data is IGroupMatchPrediction => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { username, groupMatchId, homeGoals, awayGoals, points } = data;

  return (
    validateType(username, "string", true) &&
    validateType(groupMatchId, "number", true) &&
    validateType(homeGoals, "number", true) &&
    validateType(awayGoals, "number", true) &&
    validateType(points, "number", false)
  );
};
