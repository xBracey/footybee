import { validateType } from "../../lib";

export default interface IPlayer {
  name: string;
}

export const isValidPlayer = (data: any): data is IPlayer => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { name } = data;

  return validateType(name, "string", true);
};
