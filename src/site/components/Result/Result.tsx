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

interface IResult {
  homeTeam: string;
  awayTeam: string;
  homeGoals: number;
  awayGoals: number;
  date: Date;
}

export const Result = ({
  homeTeam,
  awayTeam,
  homeGoals,
  awayGoals,
  date,
}: IResult) => {
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
        <ResultFlag
          src={`/static/flags/${homeTeam.replaceAll(" ", "_")}.svg`}
        />
      </ResultFlagContainer>

      <ResultScoreContainer>{resultScore}</ResultScoreContainer>

      <ResultFlagContainer>
        <ResultFlag
          src={`/static/flags/${awayTeam.replaceAll(" ", "_")}.svg`}
        />
      </ResultFlagContainer>
      <ResultTeam>{awayTeam}</ResultTeam>
    </ResultContainer>
  );
};
