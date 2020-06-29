import { validateType } from "@lib";

export default interface ILeague {
  leagueName: string;
  displayName: string;
  password: string;
}

export const isValidLeague = (data: any): data is ILeague => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { leagueName, displayName, password } = data;

  return (
    validateType(leagueName, "string", true) &&
    validateType(displayName, "string", true) &&
    validateType(password, "string", true)
  );
};
