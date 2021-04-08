import { addTeams } from "../../services";

const teamSeed = async () => {
  const teams = [
    {
      name: "Turkey",
      groupLetter: "A",
    },
    {
      name: "Italy",
      groupLetter: "A",
    },
    {
      name: "Wales",
      groupLetter: "A",
    },
    {
      name: "Switzerland",
      groupLetter: "A",
    },
    {
      name: "Denmark",
      groupLetter: "B",
    },
    {
      name: "Finland",
      groupLetter: "B",
    },
    {
      name: "Belgium",
      groupLetter: "B",
    },
    {
      name: "Russia",
      groupLetter: "B",
    },
    {
      name: "Netherlands",
      groupLetter: "C",
    },
    {
      name: "Ukraine",
      groupLetter: "C",
    },
    {
      name: "Austria",
      groupLetter: "C",
    },
    {
      name: "Kosovo",
      groupLetter: "C",
    },
    {
      name: "England",
      groupLetter: "D",
    },
    {
      name: "Croatia",
      groupLetter: "D",
    },
    {
      name: "Norway",
      groupLetter: "D",
    },
    {
      name: "Czech Republic",
      groupLetter: "D",
    },
    {
      name: "Spain",
      groupLetter: "E",
    },
    {
      name: "Sweden",
      groupLetter: "E",
    },
    {
      name: "Poland",
      groupLetter: "E",
    },
    {
      name: "Republic of Ireland",
      groupLetter: "E",
    },
    {
      name: "Iceland",
      groupLetter: "F",
    },
    {
      name: "Portugal",
      groupLetter: "F",
    },
    {
      name: "France",
      groupLetter: "F",
    },
    {
      name: "Germany",
      groupLetter: "F",
    },
  ];

  await addTeams(teams);
};

export default teamSeed;
