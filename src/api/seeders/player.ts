import { addPlayers } from "../services";

const playerSeed = async () => {
  const players = [
    {
      name: "Test Player 1",
    },
    {
      name: "Test Player 2",
    },
    {
      name: "Test Player Delete 1",
    },
    {
      name: "Test Player Delete 2",
    },
  ];

  await addPlayers(players);
};

export default playerSeed;
