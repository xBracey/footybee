import React, { useEffect, useState } from "react";
import { IGroupMatch } from "src/site/redux/reducers/groupMatches";
import {
  LeagueTableContainer,
  LeagueTableRow,
  LeagueTableCell,
  LeagueTableHeader,
  LeagueTableHeaderCell,
  LeagueTableSwap,
} from "./LeagueTable.styled";
import { calculateTable } from "../../../../api/lib/calculateTable/calculateTable";
import _ from "lodash";
import { icons } from "assets";

interface ILeagueTable {
  matches: IGroupMatch[];
  isResults?: boolean;
  table: any;
  setTable: (table: any) => void;
}

export const LeagueTable = ({
  matches,
  isResults,
  table,
  setTable,
}: ILeagueTable) => {
  // @ts-ignore
  const { pairings } = calculateTable(matches);

  useEffect(() => {
    // @ts-ignore
    const { table: newTable } = calculateTable(matches);
    console.log("2", newTable);
    setTable(newTable);
  }, [matches]);

  const indexPairings = _.flatten(
    pairings.map(pairing => {
      return pairing
        .map(team1 => table.findIndex(team2 => team2.name === team1))
        .sort()
        .slice(0, -1);
    })
  );

  const swapIndex = (index: number) => {
    const newTable = [...table];
    [newTable[index], newTable[index + 1]] = [
      newTable[index + 1],
      newTable[index],
    ];
    setTable(newTable);
  };

  const rowsComponent = table.map((team, index) => (
    <LeagueTableRow key={index}>
      <LeagueTableCell isName={true}>{team.name}</LeagueTableCell>
      <LeagueTableCell>{team.played}</LeagueTableCell>
      <LeagueTableCell>{team.wins}</LeagueTableCell>
      <LeagueTableCell>{team.draws}</LeagueTableCell>
      <LeagueTableCell>{team.losses}</LeagueTableCell>
      <LeagueTableCell>{team.goalsFor}</LeagueTableCell>
      <LeagueTableCell>{team.goalsAgainst}</LeagueTableCell>
      <LeagueTableCell>{team.goalDifference}</LeagueTableCell>
      <LeagueTableCell>
        <strong>{team.points}</strong>
      </LeagueTableCell>
      {indexPairings.includes(index) && !isResults ? (
        <LeagueTableSwap onClick={() => swapIndex(index)}>
          <icons.swap />
        </LeagueTableSwap>
      ) : null}
    </LeagueTableRow>
  ));

  return (
    <LeagueTableContainer>
      <LeagueTableHeader>
        <LeagueTableHeaderCell isName={true}>Name</LeagueTableHeaderCell>
        <LeagueTableHeaderCell>Pld</LeagueTableHeaderCell>
        <LeagueTableHeaderCell>W</LeagueTableHeaderCell>
        <LeagueTableHeaderCell>D</LeagueTableHeaderCell>
        <LeagueTableHeaderCell>L</LeagueTableHeaderCell>
        <LeagueTableHeaderCell>GF</LeagueTableHeaderCell>
        <LeagueTableHeaderCell>GA</LeagueTableHeaderCell>
        <LeagueTableHeaderCell>GD</LeagueTableHeaderCell>
        <LeagueTableHeaderCell>Pts</LeagueTableHeaderCell>
      </LeagueTableHeader>
      {rowsComponent}
    </LeagueTableContainer>
  );
};
