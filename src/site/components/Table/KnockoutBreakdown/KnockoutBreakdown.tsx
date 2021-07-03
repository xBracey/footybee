import React from "react";
import {
  LeagueTableCell,
  LeagueTableContainer,
  LeagueTableHeader,
  LeagueTableHeaderCell,
} from "../LeagueTable/LeagueTable.styled";
import { PredictionLeagueTableRow } from "./KnockoutBreakdown.styled";

interface IPrediction {
  teamName: string;
  roundName: string;
  points: number;
  isCorrect?: boolean;
}

interface IKnockoutBreakdown {
  predictions: IPrediction[];
}

export const KnockoutBreakdown = ({ predictions }: IKnockoutBreakdown) => {
  const rowsComponent = predictions.map((prediction, index) => (
    <PredictionLeagueTableRow
      key={index}
      points={prediction.points}
      isCorrect={prediction.isCorrect}
    >
      <LeagueTableCell isName={true} paddingRight={40}>
        {prediction.teamName}
      </LeagueTableCell>
      <LeagueTableCell isName={true}>{prediction.roundName}</LeagueTableCell>
      <LeagueTableCell width={100} paddingLeft={40}>
        {prediction.points}
      </LeagueTableCell>
    </PredictionLeagueTableRow>
  ));

  return (
    <LeagueTableContainer>
      <LeagueTableHeader>
        <LeagueTableHeaderCell isName={true} paddingRight={40}>
          Team Name
        </LeagueTableHeaderCell>
        <LeagueTableHeaderCell isName={true}>Round Name</LeagueTableHeaderCell>
        <LeagueTableHeaderCell width={100} paddingLeft={40}>
          Points
        </LeagueTableHeaderCell>
      </LeagueTableHeader>
      {rowsComponent}
    </LeagueTableContainer>
  );
};
