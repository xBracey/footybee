import IGroupMatch from "../../models/GroupMatch/type";
import { calculateGroup, IGroupTeam } from "./calculateGroup";
import { IRawPairing, ITablePairings } from "./calculateTable";
import { reducePairings } from "./reducePairings";

export const tiebreaker = (
  groupMatches: IGroupMatch[],
  names?: string[]
): ITablePairings => {
  const pairings: IRawPairing[] = [];
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

    pairings.push({ a: a.name, b: b.name });
    return 0;
  });

  if (names) {
    const newTable = table.filter(team => names.includes(team.name));

    return {
      table: newTable,
      pairings: reducePairings(pairings, newTable),
    };
  }

  return {
    table,
    pairings: reducePairings(pairings, table),
  };
};
