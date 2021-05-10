import IGroupMatch from "../../models/GroupMatch/type";

export const getMatches = (
  groupMatches: IGroupMatch[],
  teams: string[]
): IGroupMatch[] => {
  return groupMatches.filter(
    match => teams.includes(match.homeTeam) && teams.includes(match.awayTeam)
  );
};
