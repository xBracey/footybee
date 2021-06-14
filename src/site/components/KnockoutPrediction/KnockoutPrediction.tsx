import { icons } from "assets";

import React from "react";
import {
  KnockoutCard,
  KnockoutPredictionContainer,
  KnockoutName,
  KnockoutIcon,
  ResultFlag,
  ResultFlagContainer,
  KnockoutVS,
} from "./KnockoutPrediction.styled";

interface IKnockoutPrediction {
  homeTeam: string;
  awayTeam: string;
  homeWin: boolean;
  setHomeWin: (homeWin: boolean) => void;
}

export const KnockoutPrediction = ({
  homeTeam,
  awayTeam,
  homeWin,
  setHomeWin,
}: IKnockoutPrediction) => {
  let homeIcon = <icons.undecided />;
  let awayIcon = <icons.undecided />;

  if (homeWin === true) {
    homeIcon = <icons.correct />;
    awayIcon = <icons.incorrect />;
  } else if (homeWin === false) {
    homeIcon = <icons.incorrect />;
    awayIcon = <icons.correct />;
  }

  const onHomeClick = () => setHomeWin(true);
  const onAwayClick = () => setHomeWin(false);

  return (
    <KnockoutPredictionContainer>
      <KnockoutCard onClick={onHomeClick} isWinning={homeWin}>
        <KnockoutName>
          <ResultFlagContainer>
            <ResultFlag
              src={`/static/flags/${homeTeam.replace(/ /g, "_")}.svg`}
            />
          </ResultFlagContainer>
          {homeTeam}
        </KnockoutName>
        <KnockoutIcon>{homeIcon}</KnockoutIcon>
      </KnockoutCard>

      <KnockoutVS>VS</KnockoutVS>

      <KnockoutCard
        onClick={onAwayClick}
        isWinning={homeWin === null ? null : !homeWin}
      >
        <KnockoutName>
          <ResultFlagContainer>
            <ResultFlag
              src={`/static/flags/${awayTeam.replace(/ /g, "_")}.svg`}
            />
          </ResultFlagContainer>
          {awayTeam}
        </KnockoutName>
        <KnockoutIcon>{awayIcon}</KnockoutIcon>
      </KnockoutCard>
    </KnockoutPredictionContainer>
  );
};
