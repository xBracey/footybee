import React from "react";
import {
  ResultContainer,
  ResultFlag,
  ResultFlagContainer,
  ResultScore,
  ResultDate,
  ResultScoreContainer,
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
  return (
    <ResultContainer>
      <ResultFlagContainer>
        <ResultFlag src={`/static/flags/${homeTeam.replace(" ", "_")}.svg`} />
      </ResultFlagContainer>
      <ResultScoreContainer>
        <ResultScore>{`${homeGoals} - ${awayGoals}`}</ResultScore>
        <ResultDate>{moment(date).format("DD/MM")}</ResultDate>
      </ResultScoreContainer>
      <ResultFlagContainer>
        <ResultFlag src={`/static/flags/${awayTeam.replace(" ", "_")}.svg`} />
      </ResultFlagContainer>
    </ResultContainer>
  );
};
