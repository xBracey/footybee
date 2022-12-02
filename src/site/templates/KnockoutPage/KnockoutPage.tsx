import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { getMatchesFromRound } from "src/site/redux/actions/knockoutMatches";
import {
  getTeamPredictions,
  makeTeamPredictions,
} from "src/site/redux/actions/teamPredictions";
import { Page } from "templates";
import { Button, KnockoutPrediction } from "components";
import {
  KnockoutPageContainer,
  KnockoutRound,
  KnockoutHeader,
  KnockoutMatches,
  FinalPredictions,
  FinalPrediction,
  FinalPredictionHeader,
  FinalPredictionTeam,
  FinalPredictionsContainer,
  FinalPredictionBigHeader,
  KnockoutRoundContainer,
} from "./KnockoutPage.styled";
import {
  IKnockoutReducer,
  IKnockoutRound,
  IKnockoutRoundMatch,
  initialState,
  reducer,
} from "./KnockoutReducer";
import { ITeamPrediction } from "src/site/redux/reducers/teamPredictions";
import { usePredictions } from "./helpers";
import { teamPredictionLock } from "src/site/lib/predictionLock";

export const KnockoutPage = () => {
  const reduxDispatch: AppDispatch = useDispatch();

  const [state, dispatch]: [IKnockoutReducer, any] = useReducer(
    reducer,
    initialState
  );

  const user = useSelector((state: IRootState) => state.user);
  const knockoutMatches = useSelector(
    (state: IRootState) => state.knockoutMatches
  );
  const roundOf16Matches = knockoutMatches.knockoutMatches.filter(
    match => match.roundName === "Round of 16"
  );

  usePredictions(state, dispatch);

  useEffect(() => {
    if (user.username) {
      reduxDispatch(getMatchesFromRound("Round of 16")).then(() =>
        reduxDispatch(getTeamPredictions(user.username))
      );
    }
  }, [user.username]);

  const initialise = () => {
    dispatch({
      type: "initialise",
      data: {
        matches: roundOf16Matches
          .sort((a, b) => a.position - b.position)
          .map(match => ({
            ...match,
            homeWin: null,
          })),
      },
    });
  };

  useEffect(() => {
    if (roundOf16Matches.length) {
      initialise();
    }
  }, [roundOf16Matches.length]);

  const setHomeWin = (homeWin: boolean, roundName: string, index: number) =>
    dispatch({
      type: "match",
      data: {
        homeWin,
        roundName,
        index,
      },
    });

  const roundComponents = Object.entries(state).map(
    ([key, value]: [string, IKnockoutRound]) => {
      if (value.matches.length) {
        const matches = value.matches.map((match, index) => (
          <KnockoutPrediction
            {...match}
            setHomeWin={homeWin => setHomeWin(homeWin, key, index)}
            isDisabled={
              !!match.homeTeam.match(/W\d/) || !!match.awayTeam.match(/W\d/)
            }
          />
        ));

        return (
          <KnockoutRoundContainer>
            <KnockoutRound>
              <KnockoutHeader>{key}</KnockoutHeader>
              <KnockoutMatches>{matches}</KnockoutMatches>
            </KnockoutRound>
          </KnockoutRoundContainer>
        );
      }
      return null;
    }
  );

  const finalPredictions = Object.entries(state).map(
    ([key, value]: [string, IKnockoutRound]) =>
      key !== "Winner" ? (
        <FinalPredictions>
          <FinalPrediction>
            <FinalPredictionHeader>{`Loses in ${key}`}</FinalPredictionHeader>
            {value.matches.map(match =>
              match.homeWin !== null ? (
                <FinalPredictionTeam>
                  {match.homeWin ? match.awayTeam : match.homeTeam}
                </FinalPredictionTeam>
              ) : null
            )}
          </FinalPrediction>
        </FinalPredictions>
      ) : null
  );

  finalPredictions.push(
    <FinalPredictions>
      <FinalPrediction>
        <FinalPredictionHeader>{"Winner"}</FinalPredictionHeader>
        {state.Final.matches.map(match =>
          match.homeWin !== null ? (
            <FinalPredictionTeam>
              {match.homeWin ? match.homeTeam : match.awayTeam}
            </FinalPredictionTeam>
          ) : null
        )}
      </FinalPrediction>
    </FinalPredictions>
  );

  const nullWin = (match: any) => match.homeWin !== null;

  const predictions = {
    "Round of 16": state["Round of 16"].matches
      .filter(nullWin)
      .map(match => (match.homeWin ? match.awayTeam : match.homeTeam)),
    "Quarter finals": state["Quarter finals"].matches
      .filter(nullWin)
      .map(match => (match.homeWin ? match.awayTeam : match.homeTeam)),
    "Semi finals": state["Semi finals"].matches
      .filter(nullWin)
      .map(match => (match.homeWin ? match.awayTeam : match.homeTeam)),
    Final: state.Final.matches
      .filter(nullWin)
      .map(match => (match.homeWin ? match.awayTeam : match.homeTeam)),
    Winner: state.Final.matches
      .filter(nullWin)
      .map(match => (match.homeWin ? match.homeTeam : match.awayTeam)),
  };

  const onSubmit = () => {
    reduxDispatch(makeTeamPredictions(predictions));
  };

  const isNotDisabled =
    predictions["Round of 16"].length === 8 &&
    predictions["Quarter finals"].length === 4 &&
    predictions["Semi finals"].length === 2 &&
    predictions.Final.length === 1 &&
    predictions.Winner.length === 1;

  return (
    <Page title="Knockout" isLoggedIn={true} usePadding={false}>
      <KnockoutPageContainer>
        {roundComponents}
        <FinalPredictionsContainer>
          <FinalPredictionBigHeader>Final Predictions</FinalPredictionBigHeader>
          <FinalPredictions>{finalPredictions}</FinalPredictions>
          <Button
            text="Submit Predictions"
            buttonType="green"
            onClick={onSubmit}
            isDisabled={!isNotDisabled}
            isLocked={teamPredictionLock(user.username)}
          />
        </FinalPredictionsContainer>
      </KnockoutPageContainer>
    </Page>
  );
};
