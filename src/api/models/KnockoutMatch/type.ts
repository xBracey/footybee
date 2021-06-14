import { validateDate, validateType } from "../../lib";

export default interface IKnockoutMatch {
  id?: number;
  date: Date;
  homeTeam: string;
  awayTeam: string;
  roundName: string;
  homeGoals?: number;
  awayGoals?: number;
}

export const isValidKnockoutMatch = (data: any): data is IKnockoutMatch => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const {
    id,
    date,
    homeGoals,
    awayGoals,
    roundName,
    homeTeam,
    awayTeam,
  } = data;

  return (
    validateType(id, "number", false) &&
    validateType(homeTeam, "string", true) &&
    validateDate(date, true) &&
    validateType(awayTeam, "string", true) &&
    validateType(roundName, "string", true) &&
    validateType(homeGoals, "number", false) &&
    validateType(awayGoals, "number", false)
  );
};
