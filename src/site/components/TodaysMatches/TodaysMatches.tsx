import React from "react";
import { IGroupMatch } from "src/site/redux/reducers/groupMatches";
import { IKnockoutMatch } from "src/site/redux/reducers/knockoutMatches";
import {
  TodaysMatchesContainer,
  TodaysMatchesInnerContainer,
  TodaysMatchesHeader,
} from "./TodaysMatches.styled";
import { Result } from "../Result";

interface ITodaysMatches {
  groupMatches: (IGroupMatch | IKnockoutMatch)[];
}

export const TodaysMatches = ({ groupMatches }: ITodaysMatches) => {
  const groupMatchesComponent = groupMatches.map(groupMatch => (
    <Result {...groupMatch} />
  ));

  return (
    <TodaysMatchesContainer>
      <TodaysMatchesHeader>
        {groupMatches.length ? "Todays Matches:" : "No Matches Today"}
      </TodaysMatchesHeader>
      {groupMatches.length ? (
        <TodaysMatchesInnerContainer>
          {groupMatchesComponent}
        </TodaysMatchesInnerContainer>
      ) : null}
    </TodaysMatchesContainer>
  );
};
