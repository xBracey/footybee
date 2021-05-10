import IGroupMatch from "../../models/GroupMatch/type";
import { calculateGroup, IGroupTeam } from "./calculateGroup";
import { compareTeams } from "./compareTeams";

export interface ITablePairings {
  table: IGroupTeam[];
  pairings: string[][];
}

export interface IRawPairing {
  a: string;
  b: string;
}

export const calculateTable = (groupMatches: IGroupMatch[]): ITablePairings => {
  const teams = calculateGroup(groupMatches);

  let firstTable: IGroupTeam[] = Object.values(teams).sort(
    (a, b) => b.points - a.points
  );

  // 0123
  if (
    firstTable[0].points !== firstTable[1].points &&
    firstTable[1].points !== firstTable[2].points &&
    firstTable[2].points !== firstTable[3].points
  ) {
    return { table: firstTable, pairings: [] };
  }
  // 0011
  else if (
    firstTable[0].points === firstTable[1].points &&
    firstTable[1].points !== firstTable[2].points &&
    firstTable[2].points === firstTable[3].points
  ) {
    const { table: topHalf, pairings: pairing1 } = compareTeams(
      groupMatches,
      firstTable.slice(0, 2)
    );
    const { table: bottomHalf, pairings: pairing2 } = compareTeams(
      groupMatches,
      firstTable.slice(2, 4)
    );

    return {
      table: [...topHalf, ...bottomHalf],
      pairings: [...pairing1, ...pairing2],
    };
  }
  // 0012
  else if (
    firstTable[0].points === firstTable[1].points &&
    firstTable[1].points !== firstTable[2].points &&
    firstTable[2].points !== firstTable[3].points
  ) {
    const { table: topHalf, pairings } = compareTeams(
      groupMatches,
      firstTable.slice(0, 2)
    );
    return {
      table: [...topHalf, ...firstTable.slice(2, 4)],
      pairings,
    };
  }
  // 0112
  else if (
    firstTable[0].points !== firstTable[1].points &&
    firstTable[1].points === firstTable[2].points &&
    firstTable[2].points !== firstTable[3].points
  ) {
    const { table: middle, pairings } = compareTeams(
      groupMatches,
      firstTable.slice(1, 3)
    );
    return {
      table: [firstTable[0], ...middle, firstTable[3]],
      pairings,
    };
  }
  // 0122
  else if (
    firstTable[0].points !== firstTable[1].points &&
    firstTable[1].points !== firstTable[2].points &&
    firstTable[2].points === firstTable[3].points
  ) {
    const { table: bottomHalf, pairings } = compareTeams(
      groupMatches,
      firstTable.slice(2, 4)
    );
    return {
      table: [...firstTable.slice(0, 2), ...bottomHalf],
      pairings,
    };
  }
  // 0001
  else if (
    firstTable[0].points === firstTable[1].points &&
    firstTable[1].points === firstTable[2].points &&
    firstTable[2].points !== firstTable[3].points
  ) {
    const { table: top, pairings } = compareTeams(
      groupMatches,
      firstTable.slice(0, 3)
    );
    return {
      table: [...top, firstTable[3]],
      pairings,
    };
  }
  // 0111
  else if (
    firstTable[0].points !== firstTable[1].points &&
    firstTable[1].points === firstTable[2].points &&
    firstTable[2].points === firstTable[3].points
  ) {
    const { table: bottom, pairings } = compareTeams(
      groupMatches,
      firstTable.slice(1, 4)
    );
    return {
      table: [firstTable[0], ...bottom],
      pairings,
    };
  }
  // 0000
  else if (
    firstTable[0].points === firstTable[1].points &&
    firstTable[1].points === firstTable[2].points &&
    firstTable[2].points === firstTable[3].points
  ) {
    return compareTeams(groupMatches, firstTable);
  }

  return { table: firstTable, pairings: [] };
};
