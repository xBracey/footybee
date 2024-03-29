import React from "react";
import { TeamEditCard } from "./TeamEditCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

const story = storiesOf("Components/EditCard/TeamEditCard", module);

story.add("TeamEditCard Component", () => (
  <TeamEditCard
    groupLetters={["a", "b", "c", "d"]}
    team={{
      groupLetter: "A",
      name: "England",
      groupPosition: "0",
      roundName: null,
      wins: "0",
    }}
    onSave={action("Save")}
    onDelete={action("Delete")}
    isEdit={boolean("Is Edit", false)}
    roundNames={["Final", "Semi finals"]}
  />
));
