import { validateType } from "../../lib";

export default interface IPlayer {
  name: string;
  teamName?: string;
}

export const isValidPlayer = (data: any): data is IPlayer => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { name, teamName } = data;

  return (
    validateType(name, "string", true) &&
    validateType(teamName, "string", false)
  );
};
