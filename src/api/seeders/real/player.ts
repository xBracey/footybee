import { addPlayers } from "../../services";

const playerSeed = async () => {
  const players = [
    {
      name: "Harry Kane",
      teamName: "England",
    },
    {
      name: "Kylian Mbappe",
      teamName: "France",
    },
    {
      name: "Toni Kroos",
      teamName: "Germany",
    },
    {
      name: "Romelu Lukaku",
      teamName: "Belgium",
    },
    {
      name: "Memphis Depay",
      teamName: "Netherlands",
    },
    {
      name: "Cristiano Ronaldo",
      teamName: "Portugal",
    },
  ];

  await addPlayers(players);
};

export default playerSeed;
