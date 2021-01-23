import React from "react";
import { IconButton } from "./IconButton";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { icons } from "assets";

const story = storiesOf("Components/IconButton", module);

story.add("IconButton Component with link", () => (
  <IconButton SVG={icons.back} link={"/"} />
));

story.add("IconButton Component with onClick", () => (
  <IconButton SVG={icons.back} onClick={action("click")} />
));
