import React from "react";
import {
  LeagueTableContainer,
  LeagueTableRow,
  LeagueTableCell,
  LeagueTableHeader,
  LeagueTableHeaderCell,
  LeagueTableAtom,
} from "./LeagueTable.styled";

interface ITeam {
  name: string;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

interface ILeagueTable {
  teams: ITeam[];
  inverted?: boolean;
}

export const LeagueTable = ({ teams, inverted }: ILeagueTable) => {
  const rowsComponent = teams.map(team => (
    <LeagueTableRow>
      <LeagueTableCell name>{team.name}</LeagueTableCell>
      <LeagueTableCell hideMobile>{team.goalsFor}</LeagueTableCell>
      <LeagueTableCell hideMobile>{team.goalsAgainst}</LeagueTableCell>
      <LeagueTableCell showMobile>
        <LeagueTableAtom>{team.goalsFor}</LeagueTableAtom>
        <LeagueTableAtom>-</LeagueTableAtom>
        <LeagueTableAtom>{team.goalsAgainst}</LeagueTableAtom>
      </LeagueTableCell>
      <LeagueTableCell right>
        {team.goalsFor - team.goalsAgainst}
      </LeagueTableCell>
      <LeagueTableCell right>{team.points}</LeagueTableCell>
    </LeagueTableRow>
  ));

  return (
    <LeagueTableContainer>
      <LeagueTableHeader>
        <LeagueTableHeaderCell name>Name</LeagueTableHeaderCell>
        <LeagueTableHeaderCell hideMobile>For</LeagueTableHeaderCell>
        <LeagueTableHeaderCell hideMobile>Against</LeagueTableHeaderCell>
        <LeagueTableHeaderCell showMobile center>
          +/-
        </LeagueTableHeaderCell>
        <LeagueTableHeaderCell right>GD</LeagueTableHeaderCell>
        <LeagueTableHeaderCell right showMobile>
          Pts
        </LeagueTableHeaderCell>
        <LeagueTableHeaderCell right hideMobile>
          Points
        </LeagueTableHeaderCell>
      </LeagueTableHeader>
      {rowsComponent}
    </LeagueTableContainer>
  );
};
