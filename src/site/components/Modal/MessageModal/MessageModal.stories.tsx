import React from "react";
import { MessageModal } from "./MessageModal";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/Modal/MessageModal", module);

story.add("MessageModal Component", () => (
  <MessageModal open={true} setOpen={() => {}} error message="Test Message" />
));

story.add("MessageModal Component success", () => (
  <MessageModal
    open={true}
    setOpen={() => {}}
    error={false}
    message="Test Message"
  />
));
