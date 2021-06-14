import React, { useState } from "react";
import { KnockoutPrediction } from "./KnockoutPrediction";
import { storiesOf } from "@storybook/react";
import { StorybookWrapper } from "theme";

const story = storiesOf("Components/KnockoutPrediction", module);

story.add("KnockoutPrediction Component", () => {
  const [homeWin, setHomeWin] = useState(null);

  return (
    <StorybookWrapper>
      <KnockoutPrediction
        homeTeam="England"
        awayTeam="Croatia"
        homeWin={homeWin}
        setHomeWin={setHomeWin}
      />
    </StorybookWrapper>
  );
});
