import { addGroupMatchPredictions } from "../../services";

const groupMatchPredictionSeed = async () => {
  const groupMatchPredictions = [
    {
      username: "Test User 1",
      groupMatchId: 1,
      homeGoals: 1,
      awayGoals: 1,
    },
    {
      username: "Test User 2",
      groupMatchId: 2,
      homeGoals: 2,
      awayGoals: 2,
    },
  ];

  await addGroupMatchPredictions(groupMatchPredictions);
};

export default groupMatchPredictionSeed;
