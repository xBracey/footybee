import { validateDate, validateType } from "../../lib";

export default interface IGroupMatch {
  id?: number;
  date: Date;
  homeTeam: string;
  awayTeam: string;
  groupLetter: string;
  homeGoals?: number;
  awayGoals?: number;
}

export const isValidGroupMatch = (data: any): data is IGroupMatch => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const {
    id,
    date,
    homeGoals,
    awayGoals,
    groupLetter,
    homeTeam,
    awayTeam,
  } = data;

  return (
    validateType(id, "number", false) &&
    validateType(homeTeam, "string", true) &&
    validateDate(date, true) &&
    validateType(awayTeam, "string", true) &&
    validateType(groupLetter, "string", true) &&
    validateType(homeGoals, "number", false) &&
    validateType(awayGoals, "number", false)
  );
};
