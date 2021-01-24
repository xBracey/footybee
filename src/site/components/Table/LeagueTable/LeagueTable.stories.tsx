import React from "react";
import { LeagueTable } from "./LeagueTable";
import { storiesOf } from "@storybook/react";
import faker from "faker";
import { StorybookWrapper } from "theme";

const story = storiesOf("Components/Table/LeagueTable", module);

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const generateTeams = () =>
  Array(4)
    .fill(null)
    .map((value, index) => ({
      name: faker.name.firstName(),
      goalsFor: getRandomInt(8),
      goalsAgainst: getRandomInt(8),
      points: getRandomInt(15),
    }));

story.add("LeagueTable Component", () => (
  <StorybookWrapper>
    <LeagueTable teams={generateTeams()} />
  </StorybookWrapper>
));

story.add("LeagueTable mobile", () => (
  <StorybookWrapper width={375}>
    <LeagueTable teams={generateTeams()} />
  </StorybookWrapper>
));
