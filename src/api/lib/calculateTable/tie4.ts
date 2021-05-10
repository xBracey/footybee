import IGroupMatch from "../../models/GroupMatch/type";
import { IGroupTeam } from "./calculateGroup";
import { tiebreaker1 } from "./tieBreaker1";

export const tie4 = (groupMatches: IGroupMatch[], table: IGroupTeam[]) => {
  if (table.every(team => team.points === table[0].points)) {
    return tiebreaker1(groupMatches);
  }

  return table;
};
