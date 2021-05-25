import { validateBoolean, validateType } from "../../lib";

export default interface IUserLeague {
  username: string;
  leagueName: string;
  admin?: boolean;
  rank?: number;
}

export const isValidUserLeague = (data: any): data is IUserLeague => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { username, leagueName, admin, rank } = data;

  return (
    validateType(username, "string", true) &&
    validateType(leagueName, "string", true) &&
    validateType(rank, "number", false) &&
    validateBoolean(admin, false)
  );
};
