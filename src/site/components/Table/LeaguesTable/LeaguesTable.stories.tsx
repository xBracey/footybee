import React from "react";
import { LeaguesTable } from "./LeaguesTable";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const story = storiesOf("Components/Table/LeaguesTable", module);

const generateLeagues = (leagueNumber: number) =>
  Array(leagueNumber)
    .fill(null)
    .map((value, index) => ({
      name: `Test ${index + 1}`,
      rank: Math.ceil(Math.random() * 10),
    }));

story.add("LeaguesTable Component", () => (
  <LeaguesTable
    leagues={generateLeagues(number("Leagues", 10))}
    onLeagueClick={action("Click")}
  />
));
