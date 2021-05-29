import React, { useState } from "react";
import { LeagueTable } from "./LeagueTable";
import { storiesOf } from "@storybook/react";
import { StorybookWrapper } from "theme";
import { boolean, number } from "@storybook/addon-knobs";
import { IGroupMatch } from "../../../redux/reducers/groupMatches";

const story = storiesOf("Components/Table/LeagueTable", module);

const groupMatchBase = {
  id: 0,
  date: "2020-01-01",
  groupLetter: "1",
};

story.add("LeagueTable Component", () => {
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
    {
      ...groupMatchBase,
      homeTeam: "Republic of Ireland",
      awayTeam: "Denmark",
      homeGoals: number("Ireland vs Denmark (Home Goals)", 0),
      awayGoals: number("Ireland vs Denmark (Away Goals)", 0),
    },
    {
      ...groupMatchBase,
      homeTeam: "Republic of Ireland",
      awayTeam: "England",
      homeGoals: number("Republic of Ireland vs England (Home Goals)", 0),
      awayGoals: number("Republic of Ireland vs England (Away Goals)", 0),
    },
    {
      ...groupMatchBase,
      homeTeam: "Czech Republic",
      awayTeam: "Denmark",
      homeGoals: number("Czech Republic vs Denmark (Home Goals)", 0),
      awayGoals: number("Czech Republic vs Denmark (Away Goals)", 0),
    },
  ];

  const [table, setTable] = useState([]);

  return (
    <StorybookWrapper width={boolean("Mobile", false) ? 375 : 1000}>
      <LeagueTable matches={groupMatches} table={table} setTable={setTable} />
    </StorybookWrapper>
  );
});
