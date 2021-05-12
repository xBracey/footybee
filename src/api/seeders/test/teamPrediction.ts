import { addTeamPredictions } from "../../services";

const teamPredictionSeed = async () => {
  const teamPredictions = [
    {
      username: "Test User 1",
      teamName: "Test Team 1",
      groupPosition: 1,
    },
    {
      username: "Test User 2",
      teamName: "Test Team 2",
      groupPosition: 2,
    },
  ];

  await addTeamPredictions(teamPredictions);
};

export default teamPredictionSeed;
