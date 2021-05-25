import { icons } from "assets";
import React from "react";
import {
  LeagueTableCell,
  LeagueTableContainer,
  LeagueTableHeader,
  LeagueTableHeaderCell,
  LeagueTableRow,
} from "../LeagueTable/LeagueTable.styled";

import {
  LeaguesTableRowWrapper,
  LeaguesTableForwardButton,
} from "./LeaguesTable.styled";

interface ILeague {
  rank: number;
  name: string;
}

interface ILeaguesTable {
  leagues: ILeague[];
  onLeagueClick: (name: string) => void;
}

export const LeaguesTable = ({ leagues, onLeagueClick }: ILeaguesTable) => {
  const rowsComponent = leagues.map((league, index) => (
    <LeaguesTableRowWrapper onClick={() => onLeagueClick(league.name)}>
      <LeagueTableRow key={index}>
        <LeagueTableCell width={80} paddingRight={40}>
          {league.rank ?? "N/A"}
        </LeagueTableCell>
        <LeagueTableCell isName={true} notCentered>
          {league.name}
        </LeagueTableCell>
        <LeaguesTableForwardButton>
          <icons.back />
        </LeaguesTableForwardButton>
      </LeagueTableRow>
    </LeaguesTableRowWrapper>
  ));

  return (
    <LeagueTableContainer>
      <LeagueTableHeader>
        <LeagueTableHeaderCell width={80} paddingRight={40}>
          Rank
        </LeagueTableHeaderCell>
        <LeagueTableHeaderCell isName={true} notCentered>
          Name
        </LeagueTableHeaderCell>
      </LeagueTableHeader>
      {rowsComponent}
    </LeagueTableContainer>
  );
};
