import { addRounds } from "../../services";

const roundSeed = async () => {
  const rounds = [
    {
      name: "Test Round 1",
    },
    {
      name: "Test Round 2",
    },
    {
      name: "Test Round Delete 1",
    },
    {
      name: "Test Round Delete 2",
    },
  ];

  await addRounds(rounds);
};

export default roundSeed;
