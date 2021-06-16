import { addKnockoutMatches } from "../../services";

const knockoutMatchSeed = async () => {
  const knockoutMatches = [
    {
      id: 1,
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      roundName: "Test Round 1",
    },
    {
      id: 2,
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      roundName: "Test Round 2",
    },
    {
      id: 3,
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      roundName: "Test Round 1",
    },
    {
      id: 4,
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      roundName: "Test Round 1",
    },
  ];

  await addKnockoutMatches(knockoutMatches);
};

export default knockoutMatchSeed;
