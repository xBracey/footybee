import React from "react";
import { IPrediction, PredictionsTable } from "./PredictionsTable";
import { storiesOf } from "@storybook/react";
import { IGroupMatch } from "src/site/redux/reducers/groupMatches";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

const story = storiesOf("Components/PredictionsTable", module);

const groupMatchBase = {
  date: "2020-01-01",
  groupLetter: "1",
};

const groupMatches: IGroupMatch[] = [
  {
    ...groupMatchBase,
    id: 1,
    homeTeam: "Czech Republic",
    awayTeam: "Republic of Ireland",
    homeGoals: 0,
    awayGoals: 0,
  },
  {
    ...groupMatchBase,
    id: 2,
    homeTeam: "England",
    awayTeam: "Denmark",
    homeGoals: 0,
    awayGoals: 0,
  },
  {
    ...groupMatchBase,
    id: 3,
    homeTeam: "Czech Republic",
    awayTeam: "England",
    homeGoals: 0,
    awayGoals: 0,
  },
  {
    ...groupMatchBase,
    id: 4,
    homeTeam: "Republic of Ireland",
    awayTeam: "Denmark",
    homeGoals: 0,
    awayGoals: 0,
  },
  {
    ...groupMatchBase,
    id: 5,
    homeTeam: "Republic of Ireland",
    awayTeam: "England",
    homeGoals: 0,
    awayGoals: 0,
  },
  {
    ...groupMatchBase,
    id: 6,
    homeTeam: "Czech Republic",
    awayTeam: "Denmark",
    homeGoals: 0,
    awayGoals: 0,
  },
];

story.add("PredictionsTable Component", () => (
  <PredictionsTable
    groupMatches={groupMatches}
    originalPredictions={[]}
    onSave={action("Save")}
    title="Test Group"
    inverted={boolean("Inverted", false)}
  />
));
