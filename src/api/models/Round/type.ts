import { validateType } from "../../lib";

export default interface IRound {
  name: string;
}

export const isValidRound = (data: any): data is IRound => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { name } = data;

  return validateType(name, "string", true);
};
