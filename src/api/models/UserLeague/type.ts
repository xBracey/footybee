import { validateBoolean, validateType } from "../../lib";

export default interface IUserLeague {
  username: string;
  leagueCode: string;
  admin?: boolean;
  rank?: number;
}

export const isValidUserLeague = (data: any): data is IUserLeague => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { username, leagueCode, admin, rank } = data;

  return (
    validateType(username, "string", true) &&
    validateType(leagueCode, "string", true) &&
    validateType(rank, "number", false) &&
    validateBoolean(admin, false)
  );
};
