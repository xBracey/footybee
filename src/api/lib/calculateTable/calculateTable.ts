import IGroupMatch from "../../models/GroupMatch/type";
import { calculateGroup, IGroupTeam } from "./calculateGroup";
import { tie4 } from "./tie4";

export const calculateTable = (groupMatches: IGroupMatch[]): IGroupTeam[] => {
  const teams = calculateGroup(groupMatches);

  let table: IGroupTeam[] = Object.values(teams).sort(
    (a, b) => b.points - a.points
  );

  table = tie4(groupMatches, table);

  return table;
};
