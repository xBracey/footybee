import { addTeams } from "../../services";

const teamSeed = async () => {
  const teams = [
    {
      name: "Test Team 1",
      groupLetter: "Test Group 1",
      wins: 0,
    },
    {
      name: "Test Team 2",
      groupLetter: "Test Group 2",
      wins: 0,
    },
    {
      name: "Test Team Delete 1",
      groupLetter: "Test Group 1",
      wins: 0,
    },
    {
      name: "Test Team Delete 2",
      groupLetter: "Test Group 1",
      wins: 0,
    },
  ];

  await addTeams(teams);
};

export default teamSeed;
