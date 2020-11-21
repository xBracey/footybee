import { validateType, validateBoolean } from "lib";

export default interface IUser {
  username: string;
  password: string;
  email: string;
  verified: boolean;
  admin: boolean;
}

export const isValidUser = (data: any): data is IUser => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { username, password, email, verified, admin } = data;

  return (
    validateType(username, "string", true) &&
    validateType(password, "string", true) &&
    validateType(email, "string", true) &&
    validateBoolean(verified, true) &&
    validateBoolean(admin, true)
  );
};
