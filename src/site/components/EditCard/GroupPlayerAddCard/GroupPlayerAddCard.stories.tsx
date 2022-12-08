import React from "react";
import { GroupPlayerAddCard } from "./GroupPlayerAddCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const story = storiesOf("Components/EditCard/GroupPlayerAddCard", module);

story.add("GroupPlayerAddCard Component", () => (
  <GroupPlayerAddCard
    onSave={action("Save")}
    teamPlayers={[
      { name: "Harry Kane", teamName: "England", goals: 0 },
      { name: "Raheem Sterling", teamName: "England", goals: 0 },
      { name: "Neymar", teamName: "Brazil", goals: 0 },
    ]}
  />
));
