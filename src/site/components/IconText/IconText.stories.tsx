import React from "react";
import { IconText } from "./IconText";
import { storiesOf } from "@storybook/react";
import { icons } from "assets";

const story = storiesOf("Components/IconText", module);

story.add("IconText Component", () => (
  <IconText
    SVG={icons.customise}
    text="Predict each football score for the upcoming World Cup 2022 tournament."
  />
));
