import React from "react";
import { Result } from "./Result";
import { storiesOf } from "@storybook/react";
import { number, select } from "@storybook/addon-knobs";
import { StorybookWrapper } from "theme";

const story = storiesOf("Components/Result", module);

story.add("Result Component", () => (
  <StorybookWrapper>
    <Result
      date={new Date()}
      homeTeam={select(
        "Home Team",
        ["England", "Czech Republic", "Germany"],
        "England"
      )}
      awayTeam={select(
        "Away Team",
        ["England", "Czech Republic", "Germany"],
        "Czech Republic"
      )}
      homeGoals={number("Home Goals", 0)}
      awayGoals={number("Away Goals", 0)}
    />
  </StorybookWrapper>
));
