import { validateType } from "../../lib";

export default interface ILeague {
  leagueName: string;
  code: string;
}

export const isValidLeague = (data: any): data is ILeague => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { leagueName, code } = data;

  return (
    validateType(leagueName, "string", true) &&
    validateType(code, "string", true)
  );
};
