import { addTeamPredictions } from "../../services";

const teamPredictionSeed = async () => {
  const teamPredictions = [
    {
      username: "Test User 1",
      teamName: "Test Team 1",
      roundName: "Test Group 1",
    },
    {
      username: "Test User 2",
      teamName: "Test Team 2",
      roundName: "Test Group 2",
    },
  ];

  await addTeamPredictions(teamPredictions);
};

export default teamPredictionSeed;
