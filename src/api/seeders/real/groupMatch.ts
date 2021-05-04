import { addGroupMatches } from "../../services";

const groupMatchSeed = async () => {
  const groupMatches = [
    {
      id: "0",
      date: new Date(),
      homeTeam: "Turkey",
      awayTeam: "Italy",
      groupLetter: "A",
    },
  ];

  await addGroupMatches(groupMatches);
};

export default groupMatchSeed;
