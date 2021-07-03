import React from "react";
import { Result } from "./Result";
import { storiesOf } from "@storybook/react";
import { boolean, number, select } from "@storybook/addon-knobs";
import { StorybookWrapper } from "theme";

const story = storiesOf("Components/Result", module);

story.add("Result Component", () => (
  <StorybookWrapper>
    <Result
      date={"2020-01-01"}
      homeTeam={select(
        "Home Team",
        [
          "Turkey",
          "Italy",
          "Wales",
          "Switzerland",
          "Denmark",
          "Finland",
          "Belgium",
          "Russia",
          "Netherlands",
          "Ukraine",
          "Austria",
          "Kosovo",
          "England",
          "Croatia",
          "Norway",
          "Czech Republic",
          "Spain",
          "Sweden",
          "Poland",
          "Republic of Ireland",
          "Iceland",
          "Portugal",
          "France",
          "Germany",
        ],
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
