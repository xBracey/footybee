import { addGroups } from "../../services";

const groupSeed = async () => {
  const groups = [
    {
      letter: "Test Group 1",
    },
    {
      letter: "Test Group 2",
    },
    {
      letter: "Test Group Delete 1",
    },
    {
      letter: "Test Group Delete 2",
    },
  ];

  await addGroups(groups);
};

export default groupSeed;
