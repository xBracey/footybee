import { validateDate, validateType } from "../../lib";

export default interface IGroupMatch {
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

  const { date, homeGoals, awayGoals, groupLetter, homeTeam, awayTeam } = data;

  return (
    validateType(homeTeam, "string", true) &&
    validateDate(date, true) &&
    validateType(awayTeam, "string", true) &&
    validateType(groupLetter, "string", true) &&
    validateType(homeGoals, "number", false) &&
    validateType(awayGoals, "number", false)
  );
};
