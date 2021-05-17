import { addGroupMatches } from "../../services";

const groupMatchSeed = async () => {
  const groupMatches = [
    {
      id: 1,
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      groupLetter: "Test Group 1",
    },
    {
      id: 2,
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      groupLetter: "Test Group 2",
    },
    {
      id: 3,
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      groupLetter: "Test Group 1",
    },
    {
      id: 4,
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      groupLetter: "Test Group 1",
    },
  ];

  await addGroupMatches(groupMatches);
};

export default groupMatchSeed;
