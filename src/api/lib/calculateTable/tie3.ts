import IGroupMatch from "../../models/GroupMatch/type";
import { IGroupTeam } from "./calculateGroup";
import { tiebreaker1 } from "./tieBreaker1";

export const tie3 = (groupMatches: IGroupMatch[], table: IGroupTeam[]) => {
  if (table.slice(0, 3).every(team => team.points === table[0].points)) {
    const newTeamNames = table.map(team => team.name).slice(0, 3);
    const newGroupMatches = groupMatches.filter(
      match =>
        newTeamNames.includes(match.homeTeam) ||
        newTeamNames.includes(match.awayTeam)
    );

    const threeTable = tiebreaker1(newGroupMatches);
    const newTable = [...threeTable, table[3]];

    if (newTable.slice(0, 3).every(team => team.points === table[0].points)) {
    } else {
      return;
    }
  }

  return table;
};
