import React from "react";
import { PredictionsBreakdown } from "./PredictionsBreakdown";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/PredictionsBreakdown", module);

const fixtures = [
  {
    fixture: "England vs Croatia",
    score: "2-1",
    prediction: "2-1",
    points: 25,
    date: "2022-11-23T19:00:00.000Z",
  },
  {
    fixture: "England vs Croatia",
    score: "2-1",
    prediction: "1-0",
    points: 15,
    date: "2022-11-22T19:00:00.000Z",
  },
  {
    fixture: "England vs Croatia",
    score: "2-1",
    prediction: "1-1",
    points: 0,
    date: "2022-11-21T16:00:00.000Z",
  },
  {
    fixture: "England vs Croatia",
    score: "2-1",
    prediction: "6-6",
    points: 0,
    date: "2022-11-21T19:00:00.000Z",
  },
];

story.add("PredictionsBreakdown Component", () => (
  <PredictionsBreakdown fixtures={fixtures} />
));
