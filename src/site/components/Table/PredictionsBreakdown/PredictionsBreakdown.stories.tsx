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
  },
  {
    fixture: "England vs Croatia",
    score: "2-1",
    prediction: "1-0",
    points: 15,
  },
  {
    fixture: "England vs Croatia",
    score: "2-1",
    prediction: "1-1",
    points: 0,
  },
  {
    fixture: "England vs Croatia",
    score: "2-1",
    prediction: "1-1",
    points: 0,
  },
];

story.add("PredictionsBreakdown Component", () => (
  <PredictionsBreakdown fixtures={fixtures} />
));
