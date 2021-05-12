import { validateType } from "../../lib";

export default interface ITeam {
  name: string;
  groupLetter: string;
  groupPosition?: number;
}

export const isValidTeam = (data: any): data is ITeam => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { name, groupLetter, groupPosition } = data;

  return (
    validateType(name, "string", true) &&
    validateType(groupLetter, "string", true) &&
    validateType(groupPosition, "number", false)
  );
};
