import { IPrediction } from "./PredictionsTable";

interface IPredictionWithNames extends IPrediction {
  homeTeam: string;
  awayTeam: string;
}

export interface IPredictionReducer {
  predictions: IPredictionWithNames[];
}

export const reducer = (state: IPredictionReducer, action) => {
  if (action.type === "edit") {
    const { groupMatchId } = action.data;

    const predictions = [...state.predictions];

    let index = predictions.findIndex(
      prediction => prediction.groupMatchId === groupMatchId
    );

    if (index === -1) {
      return state;
    }

    predictions[index] = { ...predictions[index], ...action.data };

    return { ...state, predictions };
  }

  if (action.type === "setPredictions") {
    const { originalPredictions } = action.data;

    const predictions = [...state.predictions];

    originalPredictions.forEach(originalPrediction => {
      const index = predictions.findIndex(
        oldPrediction =>
          oldPrediction.groupMatchId === originalPrediction.groupMatchId
      );

      if (index !== -1) {
        predictions[index] = { ...predictions[index], ...originalPrediction };
      }
    });

    return { ...state, predictions };
  }

  return state;
};
