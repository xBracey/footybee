import React from "react";
import {
  ResultContainer,
  ResultFlag,
  ResultFlagContainer,
  ResultScore,
  ResultDate,
  ResultScoreContainer,
  ResultDateTime,
  ResultTeam,
} from "./Result.styled";
import moment from "moment";
import { IGroupMatch } from "src/site/redux/reducers/groupMatches";

export const Result = ({
  homeTeam,
  awayTeam,
  homeGoals,
  awayGoals,
  date,
}: IGroupMatch) => {
  const emptyResult = homeGoals === null || awayGoals === null;

  const resultScore = emptyResult ? (
    <>
      <ResultDate>{moment(date).format("DD/MM")}</ResultDate>
      <ResultDateTime>{moment(date).format("HH:mm")}</ResultDateTime>
    </>
  ) : (
    <ResultScore>{`${homeGoals} - ${awayGoals}`}</ResultScore>
  );

  return (
    <ResultContainer>
      <ResultTeam>{homeTeam}</ResultTeam>
      <ResultFlagContainer>
        <ResultFlag src={`/static/flags/${homeTeam.replace(/ /g, "_")}.svg`} />
      </ResultFlagContainer>

      <ResultScoreContainer>{resultScore}</ResultScoreContainer>

      <ResultFlagContainer>
        <ResultFlag src={`/static/flags/${awayTeam.replace(/ /g, "_")}.svg`} />
      </ResultFlagContainer>
      <ResultTeam>{awayTeam}</ResultTeam>
    </ResultContainer>
  );
};
