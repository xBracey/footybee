import { addGroups } from "../../services";

const groupSeed = async () => {
  const groups = [
    {
      letter: "A",
    },
    {
      letter: "B",
    },
    {
      letter: "C",
    },
    {
      letter: "D",
    },
    {
      letter: "E",
    },
    {
      letter: "F",
    },
  ];

  await addGroups(groups);
};

export default groupSeed;
