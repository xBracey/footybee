import { validateType } from "../../lib";

export default interface ITeam {
  name: string;
  groupLetter: string;
  groupPosition?: number;
  roundName?: string;
  wins?: number;
}

export const isValidTeam = (data: any): data is ITeam => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { name, groupLetter, groupPosition, roundName, wins } = data;

  return (
    validateType(name, "string", true) &&
    validateType(groupLetter, "string", true) &&
    validateType(groupPosition, "number", false) &&
    validateType(wins, "number", false) &&
    validateType(roundName, "string", false)
  );
};
