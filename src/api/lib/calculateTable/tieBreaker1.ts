import IGroupMatch from "../../models/GroupMatch/type";
import { calculateGroup, IGroupTeam } from "./calculateGroup";

export const tiebreaker1 = (
  groupMatches: IGroupMatch[]
): IGroupTeam[] | boolean => {
  const teams = calculateGroup(groupMatches);

  const table: IGroupTeam[] = Object.values(teams).sort((a, b) => {
    if (a.points !== b.points) {
      return a.points < b.points ? 1 : -1;
    }

    if (a.goalDifference !== b.goalDifference) {
      return a.goalDifference < b.goalDifference ? 1 : -1;
    }

    if (a.goalsFor !== b.goalsFor) {
      return a.goalsFor < b.goalsFor ? 1 : -1;
    }
  });

  return table;
};
