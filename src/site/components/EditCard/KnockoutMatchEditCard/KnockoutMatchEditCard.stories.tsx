import React from "react";
import { KnockoutMatchEditCard } from "./KnockoutMatchEditCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

const story = storiesOf("Components/EditCard/KnockoutMatchEditCard", module);

story.add("KnockoutMatchEditCard Component", () => (
  <KnockoutMatchEditCard
    teamNames={["England", "Belgium", "Denmark", "Spain"]}
    knockoutMatch={{
      date: "",
      homeTeam: null,
      awayTeam: null,
      homeGoals: "",
      awayGoals: "",
      homePenalties: "",
      awayPenalties: "",
      position: "",
    }}
    onSave={action("Save")}
    onDelete={action("Delete")}
    isEdit={boolean("Is Edit", false)}
  />
));
