import IGroupMatchPrediction from "../../models/GroupMatchPrediction/type";
import IGroupMatch from "../../models/GroupMatch/type";

const correctScore = 25;
const correctScoreDiff = 15;
const correctResult = 5;

export const calculateMatchPoints = ({
  groupMatch,
  prediction,
}: {
  groupMatch: IGroupMatch;
  prediction: IGroupMatchPrediction;
}): number => {
  const matchDiff = groupMatch.homeGoals - groupMatch.awayGoals;
  const predictionDiff = prediction.homeGoals - prediction.awayGoals;

  if (
    groupMatch.homeGoals === prediction.homeGoals &&
    groupMatch.awayGoals === prediction.awayGoals
  ) {
    return correctScore;
  }

  if (matchDiff === predictionDiff) {
    return correctScoreDiff;
  }

  if (
    (matchDiff > 0 && predictionDiff > 0) ||
    (matchDiff < 0 && predictionDiff < 0)
  ) {
    return correctResult;
  }

  return 0;
};

export const calculateMatchesPoints = (
  groupMatch: IGroupMatch,
  predictions: IGroupMatchPrediction[]
): number[] => {
  const matchPredictionsPairing = [];

  predictions.forEach(prediction => {
    if (groupMatch.id === prediction.groupMatchId) {
      matchPredictionsPairing.push({ groupMatch, prediction });
    }
  });

  const matchPredictionsPoints = matchPredictionsPairing.map(pairing =>
    calculateMatchPoints(pairing)
  );

  return matchPredictionsPoints;
};
