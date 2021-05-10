import React from "react";
import { LeagueTable } from "./LeagueTable";
import { storiesOf } from "@storybook/react";
import { StorybookWrapper } from "theme";
import { boolean, number } from "@storybook/addon-knobs";
import { IGroupMatch } from "../../../redux/reducers/groupMatches";

const story = storiesOf("Components/Table/LeagueTable", module);

const groupMatchBase = {
  id: "0",
  date: "2020-01-01",
  groupLetter: "1",
};

story.add("LeagueTable Component", () => {
  const groupMatches: IGroupMatch[] = [
    {
      ...groupMatchBase,
      homeTeam: "Czech Republic",
      awayTeam: "Republic of Ireland",
      homeGoals: number("1H", 0),
      awayGoals: number("1A", 0),
    },
    {
      ...groupMatchBase,
      homeTeam: "England",
      awayTeam: "Denmark",
      homeGoals: number("2H", 0),
      awayGoals: number("2A", 0),
    },
    {
      ...groupMatchBase,
      homeTeam: "Czech Republic",
      awayTeam: "England",
      homeGoals: number("3H", 0),
      awayGoals: number("3A", 0),
    },
    {
      ...groupMatchBase,
      homeTeam: "Republic of Ireland",
      awayTeam: "Denmark",
      homeGoals: number("4H", 0),
      awayGoals: number("4A", 0),
    },
    {
      ...groupMatchBase,
      homeTeam: "Republic of Ireland",
      awayTeam: "England",
      homeGoals: number("5H", 0),
      awayGoals: number("5A", 0),
    },
    {
      ...groupMatchBase,
      homeTeam: "Czech Republic",
      awayTeam: "Denmark",
      homeGoals: number("6H", 0),
      awayGoals: number("6A", 0),
    },
  ];

  return (
    <StorybookWrapper width={boolean("Mobile", false) ? 375 : 1000}>
      <LeagueTable matches={groupMatches} />
    </StorybookWrapper>
  );
});
