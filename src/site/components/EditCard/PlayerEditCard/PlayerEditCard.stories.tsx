import React from "react";
import { PlayerEditCard } from "./PlayerEditCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

const story = storiesOf("Components/PlayerEditCard", module);

story.add("PlayerEditCard Component", () => (
  <PlayerEditCard
    teamNames={["England", "Belgium", "Denmark", "Spain"]}
    player={{ teamName: "England", name: "Harry Kane" }}
    onSave={action("Save")}
    onDelete={action("Delete")}
    isEdit={boolean("Is Edit", false)}
  />
));
