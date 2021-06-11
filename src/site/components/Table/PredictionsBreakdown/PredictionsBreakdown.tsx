import React from "react";
import {
  LeagueTableCell,
  LeagueTableContainer,
  LeagueTableHeader,
  LeagueTableHeaderCell,
} from "../LeagueTable/LeagueTable.styled";
import { PredictionLeagueTableRow } from "./PredictionsBreakdown.styled";

interface IFixture {
  fixture: string;
  score: string;
  prediction: string;
  points: number;
}

interface IPredictionsBreakdown {
  fixtures: IFixture[];
}

export const PredictionsBreakdown = ({ fixtures }: IPredictionsBreakdown) => {
  const rowsComponent = fixtures.map((fixture, index) => (
    <PredictionLeagueTableRow key={index} points={fixture.points}>
      <LeagueTableCell isName={true} paddingRight={40}>
        {fixture.fixture}
      </LeagueTableCell>
      <LeagueTableCell width={80}>{fixture.score}</LeagueTableCell>
      <LeagueTableCell width={80}>{fixture.prediction}</LeagueTableCell>
      <LeagueTableCell width={100} paddingLeft={40}>
        {fixture.points}
      </LeagueTableCell>
    </PredictionLeagueTableRow>
  ));

  return (
    <LeagueTableContainer>
      <LeagueTableHeader>
        <LeagueTableHeaderCell isName={true} paddingRight={40}>
          Fixture
        </LeagueTableHeaderCell>
        <LeagueTableHeaderCell width={80}>Score</LeagueTableHeaderCell>
        <LeagueTableHeaderCell width={80}>Prediction</LeagueTableHeaderCell>
        <LeagueTableHeaderCell width={100} paddingLeft={40}>
          Points
        </LeagueTableHeaderCell>
      </LeagueTableHeader>
      {rowsComponent}
    </LeagueTableContainer>
  );
};
