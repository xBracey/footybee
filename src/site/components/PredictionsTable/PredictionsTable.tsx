import React, { useEffect, useReducer } from "react";
import { IGroupMatch } from "src/site/redux/reducers/groupMatches";
import { IPredictionReducer, reducer } from "./PredictionReducer";
import { Prediction } from "../Prediction";
import {
  ResultsContainer,
  ResultsTableContainer,
  ResultsTableOuterContainer,
  ResultTableTitle,
  TableContainer,
} from "components/ResultsTable/ResultsTable.styled";
import { LeagueTable } from "../Table";
import { Button } from "../Button";
import { ButtonContainer } from "./PredictionsTable.styled";

export interface IPrediction {
  groupMatchId: number;
  homeGoals: string;
  awayGoals: string;
}

interface IPredictionsTable {
  groupMatches: IGroupMatch[];
  originalPredictions: IPrediction[];
  title: string;
  inverted: boolean;
  onSave: (predictions: IPrediction[]) => void;
}

export const PredictionsTable = ({
  groupMatches,
  originalPredictions,
  title,
  inverted,
  onSave,
}: IPredictionsTable) => {
  const [state, dispatch]: [IPredictionReducer, any] = useReducer(reducer, {
    predictions: groupMatches.map(match => ({
      groupMatchId: match.id,
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
      homeGoals: "0",
      awayGoals: "0",
    })),
  });

  useEffect(() => {
    dispatch({ type: "setPredictions", data: { originalPredictions } });
  }, [originalPredictions]);

  const { predictions } = state;

  const predictionsComponent = predictions.map(prediction => (
    <Prediction
      {...prediction}
      key={prediction.groupMatchId}
      setHomeGoals={homeGoals =>
        dispatch({
          type: "edit",
          data: { groupMatchId: prediction.groupMatchId, homeGoals },
        })
      }
      setAwayGoals={awayGoals =>
        dispatch({
          type: "edit",
          data: { groupMatchId: prediction.groupMatchId, awayGoals },
        })
      }
    />
  ));

  const matches: IGroupMatch[] = predictions.map(prediction => ({
    ...prediction,
    id: prediction.groupMatchId,
    homeGoals: parseInt(prediction.homeGoals),
    awayGoals: parseInt(prediction.awayGoals),
    date: null,
    groupLetter: null,
  }));

  const onButtonClick = () => onSave(predictions);

  return (
    <ResultsTableOuterContainer inverted={inverted}>
      <ResultsTableContainer>
        <ResultTableTitle>{title}</ResultTableTitle>
        <ResultsContainer>{predictionsComponent}</ResultsContainer>
        <TableContainer>
          <LeagueTable matches={matches} />
        </TableContainer>
        <ButtonContainer>
          <Button
            text="Save Group Predictions"
            buttonType={inverted ? "green" : "blue"}
            onClick={onButtonClick}
          />
        </ButtonContainer>
      </ResultsTableContainer>
    </ResultsTableOuterContainer>
  );
};
