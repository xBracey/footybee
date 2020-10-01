import React from "react";
import { Button } from "./Button";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/Button", module);

story.add("Button Component", () => <Button />);
