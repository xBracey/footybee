import React from "react";
import { Button } from "./Button";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

const story = storiesOf("Components/Button", module);

story.add("Button Component Green", () => (
  <Button
    onClick={() => {}}
    buttonType={"green"}
    text={"Test Button"}
    isLocked={boolean("Is Locked", false)}
  />
));

story.add("Button Component Blue", () => (
  <Button onClick={() => {}} buttonType={"blue"} text={"Test Button"} />
));

story.add("Button Component Blue isDisabled", () => (
  <Button
    onClick={() => {}}
    buttonType={"blue"}
    text={"Test Button"}
    isDisabled
  />
));
