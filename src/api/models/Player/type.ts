import { validateType } from "../../lib";

export default interface IPlayer {
  name: string;
  teamName: string;
  goals?: number;
}

export const isValidPlayer = (data: any): data is IPlayer => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { name, teamName, goals } = data;

  return (
    validateType(name, "string", true) &&
    validateType(teamName, "string", true) &&
    validateType(goals, "number", false)
  );
};
