import { validateBoolean, validateType } from "../../lib";

export default interface IUserLeague {
  username: string;
  leagueName: string;
  admin?: boolean;
}

export const isValidUserLeague = (data: any): data is IUserLeague => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { username, leagueName, admin } = data;

  return (
    validateType(username, "string", true) &&
    validateType(leagueName, "string", true) &&
    validateBoolean(admin, false)
  );
};
