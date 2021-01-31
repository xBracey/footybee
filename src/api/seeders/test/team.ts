import { addTeams } from "../../services";

const teamSeed = async () => {
  const teams = [
    {
      name: "Test Team 1",
    },
    {
      name: "Test Team 2",
    },
    {
      name: "Test Team Delete 1",
    },
    {
      name: "Test Team Delete 2",
    },
  ];

  await addTeams(teams);
};

export default teamSeed;
