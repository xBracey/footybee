import { validateType } from "../../lib";

export default interface IGroup {
  letter: string;
}

export const isValidGroup = (data: any): data is IGroup => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { letter } = data;

  return validateType(letter, "string", true);
};
