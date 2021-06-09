import React, { useEffect, useReducer, useState } from "react";
import { IGroupMatch } from "../../redux/reducers/groupMatches";
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
import { ButtonContainer, PairingNote } from "./PredictionsTable.styled";
import { calculateTable } from "../../../api/lib/calculateTable/calculateTable";

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
  onSave: (predictions: IPrediction[], teams: string[]) => void;
  isLocked: boolean;
  originalPositions?: string[];
}

export const PredictionsTable = ({
  groupMatches,
  originalPredictions,
  title,
  inverted,
  onSave,
  isLocked,
  originalPositions,
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

  const { predictions } = state;

  const [matches, setMatches] = useState(
    predictions.map(prediction => ({
      ...prediction,
      id: prediction.groupMatchId,
      homeGoals: parseInt(prediction.homeGoals),
      awayGoals: parseInt(prediction.awayGoals),
      date: null,
      groupLetter: null,
    }))
  );

  const [table, setTable] = useState([]);

  useEffect(() => {
    if (originalPositions.length && table.length) {
      const newTable = originalPositions.map(teamName =>
        table.find(team => team.name === teamName)
      );
      setTable(newTable);
    }
  }, [originalPositions]);

  useEffect(() => {
    dispatch({ type: "setPredictions", data: { originalPredictions } });
  }, [originalPredictions]);

  useEffect(() => {
    setMatches(
      predictions.map(prediction => ({
        ...prediction,
        id: prediction.groupMatchId,
        homeGoals: parseInt(prediction.homeGoals),
        awayGoals: parseInt(prediction.awayGoals),
        date: null,
        groupLetter: null,
      }))
    );
  }, [predictions]);

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

  const onButtonClick = () =>
    onSave(
      predictions,
      table.map(team => team.name)
    );

  const { pairings } = calculateTable(matches);

  const pairingNoteComponent = pairings.length ? (
    <PairingNote>
      <b>Note: </b> <br /> Your predictions have resulted in a tie between two
      or more teams for a position in the league table.
      <br /> You have the option on the side of the table to switch these
      positions
    </PairingNote>
  ) : null;

  return (
    <ResultsTableOuterContainer inverted={inverted}>
      <ResultsTableContainer>
        <ResultTableTitle>{title}</ResultTableTitle>
        <ResultsContainer>{predictionsComponent}</ResultsContainer>
        {pairingNoteComponent}
        <TableContainer>
          <LeagueTable matches={matches} table={table} setTable={setTable} />
        </TableContainer>
        <ButtonContainer>
          <Button
            text="Save Group Predictions"
            buttonType={inverted ? "green" : "blue"}
            onClick={onButtonClick}
            isLocked={isLocked}
          />
        </ButtonContainer>
      </ResultsTableContainer>
    </ResultsTableOuterContainer>
  );
};
