import React from "react";
import { Overview } from "./Overview";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/Overview", module);

story.add("Overview Component", () => (
  <Overview
    pointsToday={100}
    points={200}
    favLeagueName={"Test League"}
    favLeagueRank={12}
    name={"xBracey"}
  />
));
