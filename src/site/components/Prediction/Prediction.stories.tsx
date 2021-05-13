import React, { useState } from "react";
import { Prediction } from "./Prediction";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { StorybookWrapper } from "theme";

const story = storiesOf("Components/Prediction", module);

story.add("Prediction Component", () => {
  const [homeGoals, setHomeGoals] = useState("0");
  const [awayGoals, setAwayGoals] = useState("0");

  return (
    <StorybookWrapper>
      <Prediction
        homeTeam={select("Home Team", ["Turkey", "Italy", "Wales"], "Turkey")}
        awayTeam={select(
          "Away Team",
          ["England", "Czech Republic", "Germany"],
          "Czech Republic"
        )}
        homeGoals={homeGoals}
        setHomeGoals={setHomeGoals}
        awayGoals={awayGoals}
        setAwayGoals={setAwayGoals}
      />
    </StorybookWrapper>
  );
});
