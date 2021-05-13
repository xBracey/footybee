import { icons } from "assets";
import { scoreValidation } from "lib";
import React, { ChangeEvent } from "react";
import {
  ResultContainer,
  ResultFlag,
  ResultFlagContainer,
  ResultScore,
  ResultTeam,
} from "../Result/Result.styled";
import {
  PredictionDash,
  PredictionInput,
  PredictionInputContainer,
  PredictionScoreContainer,
} from "./Prediction.styled";

interface IPrediction {
  homeTeam: string;
  awayTeam: string;
  homeGoals: string;
  setHomeGoals: (homeGoals: string) => void;
  awayGoals: string;
  setAwayGoals: (awayGoals: string) => void;
}

export const Prediction = ({
  homeTeam,
  awayTeam,
  homeGoals,
  setHomeGoals,
  awayGoals,
  setAwayGoals,
}: IPrediction) => {
  const setHome = (value: string) => {
    if (value === "" || scoreValidation.validation(value)) {
      setHomeGoals(value);
    }
  };

  const setAway = (value: string) => {
    if (value === "" || scoreValidation.validation(value)) {
      setAwayGoals(value);
    }
  };

  const onHomeChange = (event: ChangeEvent<HTMLInputElement>) =>
    setHome(event.target.value);

  const onAwayChange = (event: ChangeEvent<HTMLInputElement>) =>
    setAway(event.target.value);

  const onBlur = () => {
    if (homeGoals === "") {
      setHomeGoals("0");
    }

    if (awayGoals === "") {
      setAwayGoals("0");
    }
  };

  const increaseHome = () => setHome((parseInt(homeGoals) + 1).toString());
  const decreaseHome = () => setHome((parseInt(homeGoals) - 1).toString());
  const increaseAway = () => setAway((parseInt(awayGoals) + 1).toString());
  const decreaseAway = () => setAway((parseInt(awayGoals) - 1).toString());

  return (
    <ResultContainer>
      <ResultTeam>{homeTeam}</ResultTeam>
      <ResultFlagContainer>
        <ResultFlag
          src={`/static/flags/${homeTeam.replaceAll(" ", "_")}.svg`}
        />
      </ResultFlagContainer>

      <PredictionScoreContainer>
        <PredictionInputContainer>
          <icons.triangle onClick={increaseHome} />
          <PredictionInput
            value={homeGoals}
            onChange={onHomeChange}
            onBlur={onBlur}
          />
          <icons.triangle onClick={decreaseHome} />
        </PredictionInputContainer>
        <PredictionDash>-</PredictionDash>
        <PredictionInputContainer>
          <icons.triangle onClick={increaseAway} />
          <PredictionInput
            value={awayGoals}
            onChange={onAwayChange}
            onBlur={onBlur}
          />
          <icons.triangle onClick={decreaseAway} />
        </PredictionInputContainer>
      </PredictionScoreContainer>

      <ResultFlagContainer>
        <ResultFlag
          src={`/static/flags/${awayTeam.replaceAll(" ", "_")}.svg`}
        />
      </ResultFlagContainer>
      <ResultTeam>{awayTeam}</ResultTeam>
    </ResultContainer>
  );
};
