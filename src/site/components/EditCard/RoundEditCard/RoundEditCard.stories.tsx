import React from "react";
import { RoundEditCard } from "./RoundEditCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

const story = storiesOf("Components/EditCard/RoundEditCard", module);

story.add("RoundEditCard Component", () => (
  <RoundEditCard
    round={{ name: "Final" }}
    onSave={action("Save")}
    onDelete={action("Delete")}
    isEdit={boolean("Is Edit", false)}
  />
));
