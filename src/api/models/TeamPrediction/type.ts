import { validateType } from "../../lib";

export default interface ITeamPrediction {
  username: string;
  teamName: string;
  roundName: string;
  points?: number;
}

export const isValidTeamPrediction = (data: any): data is ITeamPrediction => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { username, teamName, roundName, points } = data;

  return (
    validateType(username, "string", true) &&
    validateType(teamName, "string", true) &&
    validateType(roundName, "string", true) &&
    validateType(points, "number", false)
  );
};
