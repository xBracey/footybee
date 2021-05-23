import { validateType } from "../../lib";

export default interface ITeamPrediction {
  username: string;
  teamName: string;
  groupPosition: number;
  points?: number;
}

export const isValidTeamPrediction = (data: any): data is ITeamPrediction => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { username, teamName, groupPosition, points } = data;

  return (
    validateType(username, "string", true) &&
    validateType(teamName, "string", true) &&
    validateType(groupPosition, "number", true) &&
    validateType(points, "number", false)
  );
};
