import { addPlayers } from "../../services";

const playerSeed = async () => {
  const players = [
    {
      name: "Test Player 1",
      teamName: "Test Team 1",
      goals: 0,
    },
    {
      name: "Test Player 2",
      teamName: "Test Team 1",
      goals: 0,
    },
    {
      name: "Test Player Delete 1",
      teamName: "Test Team 1",
      goals: 0,
    },
    {
      name: "Test Player Delete 2",
      teamName: "Test Team 1",
      goals: 0,
    },
  ];

  await addPlayers(players);
};

export default playerSeed;
