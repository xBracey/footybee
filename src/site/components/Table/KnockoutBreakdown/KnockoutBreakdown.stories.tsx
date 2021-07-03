import React from "react";
import { KnockoutBreakdown } from "./KnockoutBreakdown";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/KnockoutBreakdown", module);

const predictions = [
  {
    teamName: "England",
    roundName: "Winner",
    points: 25,
  },
  {
    teamName: "Croatia",
    roundName: "Semi finals",
    points: 15,
  },
  {
    teamName: "Italy",
    roundName: "Final",
    points: 40,
    isCorrect: true,
  },
];

story.add("KnockoutBreakdown Component", () => (
  <KnockoutBreakdown predictions={predictions} />
));
