import React from "react";
import { EditCard } from "./EditCard";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { TextInput } from "../../Input";
import { action } from "@storybook/addon-actions";

const story = storiesOf("Components/EditCard", module);

story.add("EditCard Component", () => (
  <EditCard
    isDisabled={boolean("Is disabled", false)}
    onSave={action("Save")}
    onDelete={boolean("Has delete", true) ? action("Delete") : null}
    title="Test Player 1"
    isEdit={boolean("Is Edit", false)}
  >
    <TextInput text="efnejkfn" setText={() => {}} />
  </EditCard>
));
