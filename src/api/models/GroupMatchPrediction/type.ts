import { validateType } from "../../lib";

export default interface IGroupMatchPrediction {
  username: string;
  groupMatchId: string;
  homeGoals: number;
  awayGoals: number;
}

export const isValidGroupMatchPrediction = (
  data: any
): data is IGroupMatchPrediction => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { username, groupMatchId, homeGoals, awayGoals } = data;

  return (
    validateType(username, "string", true) &&
    validateType(groupMatchId, "number", true) &&
    validateType(homeGoals, "number", true) &&
    validateType(awayGoals, "number", true)
  );
};
