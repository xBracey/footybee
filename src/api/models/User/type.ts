import { validateType, validateBoolean } from "../../lib";

export default interface IUser {
  username: string;
  password: string;
  email: string;
  verified?: boolean;
  admin?: boolean;
  favouriteLeagueName?: string;
}

export const isValidUser = (data: any): data is IUser => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const {
    username,
    password,
    email,
    verified,
    admin,
    favouriteLeagueName,
  } = data;

  return (
    validateType(username, "string", true) &&
    validateType(password, "string", true) &&
    validateType(email, "string", true) &&
    validateType(favouriteLeagueName, "string", false) &&
    validateBoolean(verified, false) &&
    validateBoolean(admin, false)
  );
};
