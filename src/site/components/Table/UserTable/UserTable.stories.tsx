import React from "react";
import { UserTable } from "./UserTable";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";

const story = storiesOf("Components/Table/UserTable", module);

const generateUsers = (userNumber: number) =>
  Array(userNumber)
    .fill(null)
    .map((value, index) => ({
      username: `Test ${index + 1}`,
      displayName: `Test ${index + 1}`,
      points: Math.ceil(Math.random() * 100),
      isUser: index === 3,
    }));

story.add("UserTable Component", () => (
  <UserTable users={generateUsers(number("Users", 10))} />
));
