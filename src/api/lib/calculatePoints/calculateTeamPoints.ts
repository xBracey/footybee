import IKnockoutMatch from "../../models/KnockoutMatch/type";
import ITeamPrediction from "../../models/TeamPrediction/type";

const points = [15, 20, 30, 40];

const rounds = [
  "Round of 16",
  "Quarter finals",
  "Semi finals",
  "Final",
  "Winner",
];

export const calculateTeamPoints = (
  knockoutMatch: IKnockoutMatch,
  prediction: ITeamPrediction,
  home: boolean
): number => {
  let homeTeamWin: boolean;

  if (knockoutMatch.homeGoals < knockoutMatch.awayGoals) {
    homeTeamWin = false;
  } else if (knockoutMatch.homeGoals > knockoutMatch.awayGoals) {
    homeTeamWin = true;
  } else if (knockoutMatch.homePenalties > knockoutMatch.awayPenalties) {
    homeTeamWin = true;
  } else {
    homeTeamWin = false;
  }

  const predictionIndex = rounds.findIndex(
    round => round === prediction.roundName
  );
  const matchIndex = rounds.findIndex(
    round => round === knockoutMatch.roundName
  );

  if ((homeTeamWin && home) || (!homeTeamWin && !home)) {
    if (
      predictionIndex !== -1 &&
      matchIndex !== -1 &&
      predictionIndex > matchIndex
    ) {
      return points
        .filter((point, index) => index <= matchIndex)
        .reduce((acc, value) => acc + value);
    }
  }

  return null;
};

export const calculateTeamsPoints = (
  knockoutMatch: IKnockoutMatch,
  predictions: ITeamPrediction[]
): {
  username: string;
  teamName: string;
  points: number;
}[] => {
  const matchPredictionsPairing: {
    prediction: ITeamPrediction;
    home: boolean;
  }[] = [];

  predictions.forEach(prediction => {
    if (knockoutMatch.homeTeam === prediction.teamName) {
      matchPredictionsPairing.push({
        prediction,
        home: true,
      });
    }

    if (knockoutMatch.awayTeam === prediction.teamName) {
      matchPredictionsPairing.push({
        prediction,
        home: false,
      });
    }
  });

  const matchPredictionsPoints = matchPredictionsPairing.map(pairing => ({
    username: pairing.prediction.username,
    teamName: pairing.prediction.teamName,
    points: calculateTeamPoints(
      knockoutMatch,
      pairing.prediction,
      pairing.home
    ),
  }));

  return matchPredictionsPoints;
};
