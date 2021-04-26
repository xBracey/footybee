import React from "react";
import { GroupEditCard } from "./GroupEditCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

const story = storiesOf("Components/GroupEditCard", module);

story.add("GroupEditCard Component", () => (
  <GroupEditCard
    group={{ letter: "A" }}
    onSave={action("Save")}
    onDelete={action("Delete")}
    isEdit={boolean("Is Edit", false)}
  />
));
