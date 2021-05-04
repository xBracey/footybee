import React from "react";
import { GroupMatchEditCard } from "./GroupMatchEditCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

const story = storiesOf("Components/EditCard/GroupMatchEditCard", module);

story.add("GroupMatchEditCard Component", () => (
  <GroupMatchEditCard
    teamNames={["England", "Belgium", "Denmark", "Spain"]}
    groupMatch={{
      homeTeam: null,
      awayTeam: null,
      homeTeamGoals: "",
      awayTeamGoals: "",
    }}
    onSave={action("Save")}
    onDelete={action("Delete")}
    isEdit={boolean("Is Edit", false)}
  />
));
