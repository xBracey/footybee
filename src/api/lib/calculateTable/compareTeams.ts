import _ from "lodash";
import IGroupMatch from "../../models/GroupMatch/type";
import { IGroupTeam } from "./calculateGroup";
import { ITablePairings } from "./calculateTable";
import { getMatches } from "./getMatches";
import { tiebreaker } from "./tiebreaker";

export const compareTeams = (
  allGroupMatches: IGroupMatch[],
  teams: IGroupTeam[]
): ITablePairings => {
  const names = teams.map(team => team.name);

  const matches = getMatches(allGroupMatches, names);

  const allTable = tiebreaker(allGroupMatches, names);

  const { table, pairings } = tiebreaker(matches);

  if (pairings.length === 1 && pairings[0].length === teams.length) {
    return allTable;
  }

  const modifiedTable = table.map(team =>
    allTable.table.find(allTableTeam => team.name === allTableTeam.name)
  );

  if (!pairings.length) {
    return {
      table: modifiedTable,
      pairings,
    };
  }

  const newTable = [];
  const newPairings = [];

  for (let i = 0; i < table.length; i++) {
    const team = modifiedTable[i];
    for (let j = 0; j < pairings.length; j++) {
      const pairing = pairings[j];

      if (pairing[0] === team.name) {
        const { table: subTable, pairings: subPairings } = compareTeams(
          allGroupMatches,
          pairing.map(teamName => teams.find(team => team.name === teamName))
        );

        newTable.push(...subTable);
        newPairings.push(...subPairings);
      } else if (!_.flatten(pairings).find(pairing => pairing === team.name)) {
        newTable.push(team);
      }
    }
  }

  return {
    table: newTable,
    pairings: newPairings,
  };
};
