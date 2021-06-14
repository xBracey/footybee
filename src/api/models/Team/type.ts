import { validateType } from "../../lib";

export default interface ITeam {
  name: string;
  groupLetter: string;
  groupPosition?: number;
  tournamentPosition?: number;
}

export const isValidTeam = (data: any): data is ITeam => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { name, groupLetter, groupPosition, tournamentPosition } = data;

  return (
    validateType(name, "string", true) &&
    validateType(groupLetter, "string", true) &&
    validateType(groupPosition, "number", false) &&
    validateType(tournamentPosition, "number", false)
  );
};
