import React from "react";
import {
  OverviewContainer,
  OverviewFlex,
  OverviewTitle,
  OverviewDescription,
  OverviewInnerContainer,
} from "./Overview.styled";

interface IOverview {
  pointsToday: number;
  points: number;
  favLeagueName: string;
  favLeagueRank: number;
}

export const Overview = ({
  pointsToday,
  points,
  favLeagueName,
  favLeagueRank,
}: IOverview) => {
  return (
    <OverviewContainer>
      <OverviewInnerContainer>
        <OverviewFlex>
          <OverviewTitle>Points Today:</OverviewTitle>
          <OverviewDescription>{pointsToday}</OverviewDescription>
        </OverviewFlex>
        <OverviewFlex>
          <OverviewTitle>Total Points:</OverviewTitle>
          <OverviewDescription>{points}</OverviewDescription>
        </OverviewFlex>
        <OverviewFlex>
          <OverviewTitle>{`${favLeagueName} Rank:`}</OverviewTitle>
          <OverviewDescription>{favLeagueRank}</OverviewDescription>
        </OverviewFlex>
      </OverviewInnerContainer>
    </OverviewContainer>
  );
};
