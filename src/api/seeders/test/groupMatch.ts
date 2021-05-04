import { addGroupMatches } from "../../services";

const groupMatchSeed = async () => {
  const groupMatches = [
    {
      id: "Test Group Match 1",
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      groupLetter: "Test Group 1",
    },
    {
      id: "Test Group Match 2",
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      groupLetter: "Test Group 2",
    },
    {
      id: "Test Group Match Delete 1",
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
      groupLetter: "Test Group 1",
    },
    {
      id: "Test Group Match Delete 2",
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
