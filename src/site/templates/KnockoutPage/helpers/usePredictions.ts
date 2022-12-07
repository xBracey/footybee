import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { ITeamPrediction } from "src/site/redux/reducers/teamPredictions";
import { IKnockoutReducer, IKnockoutRoundMatch } from "../KnockoutReducer";

export const usePredictions = (
  state: IKnockoutReducer,
  dispatch: AppDispatch
) => {
  const teamPredictions = useSelector(
    (state: IRootState) => state.teamPredictions
  );

  const dispatchPrediction = (prediction: ITeamPrediction) => {
    const matchIndex = state[prediction.roundName].matches.findIndex(
      match =>
        match.homeTeam === prediction.teamName ||
        match.awayTeam === prediction.teamName
    );

    if (matchIndex !== -1) {
      const match: IKnockoutRoundMatch =
        state[prediction.roundName].matches[matchIndex];

      dispatch({
        type: "match",
        data: {
          homeWin: match.awayTeam === prediction.teamName,
          roundName: prediction.roundName,
          index: matchIndex,
        },
      });
    }
  };

  useEffect(() => {
    if (teamPredictions.predictions.length) {
      const teamsPredicted = teamPredictions.predictions.filter(
        prediction => !!prediction.roundName
      );

      const teamsSorted = {
        "Group Stage": [],
        "Round of 16": [],
        "Quarter finals": [],
        "Semi finals": [],
        Final: [],
        Winner: [],
      };

      teamsPredicted.forEach(prediction =>
        teamsSorted[prediction.roundName].push(prediction)
      );

      // TODO change lol
      setTimeout(() => {
        teamsSorted["Round of 16"].forEach(dispatchPrediction);
      }, 0);
      setTimeout(() => {
        teamsSorted["Quarter finals"].forEach(dispatchPrediction);
      }, 100);
      setTimeout(() => {
        teamsSorted["Semi finals"].forEach(dispatchPrediction);
      }, 200);
      setTimeout(() => {
        teamsSorted.Final.forEach(dispatchPrediction);
      }, 300);
    }
  }, [teamPredictions.predictions.length]);
};
