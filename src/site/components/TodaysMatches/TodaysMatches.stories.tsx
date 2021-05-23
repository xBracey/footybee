import React from "react";
import { TodaysMatches } from "./TodaysMatches";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { IGroupMatch } from "src/site/redux/reducers/groupMatches";

const story = storiesOf("Components/TodaysMatches", module);

const groupMatchBase = {
  id: 0,
  date: "2020-01-01",
  groupLetter: "1",
};

story.add("TodaysMatches Component", () => {
  const groupMatches: IGroupMatch[] = [
    {
      ...groupMatchBase,
      homeTeam: "Czech Republic",
      awayTeam: "Republic of Ireland",
      homeGoals: number("Czech Republic vs Ireland (Home Goals)", 0),
      awayGoals: number("Czech Republic vs Ireland (Away Goals)", 0),
    },
    {
      ...groupMatchBase,
      homeTeam: "England",
      awayTeam: "Denmark",
      homeGoals: number("England vs Denmark (Home Goals)", 0),
      awayGoals: number("England vs Denmark (Away Goals)", 0),
    },
    {
      ...groupMatchBase,
      homeTeam: "Czech Republic",
      awayTeam: "England",
      homeGoals: number("Czech Republic vs England (Home Goals)", 0),
      awayGoals: number("Czech Republic vs England (Away Goals)", 0),
    },
  ];

  return (
    <TodaysMatches groupMatches={groupMatches.slice(0, number("Slice", 3))} />
  );
});
