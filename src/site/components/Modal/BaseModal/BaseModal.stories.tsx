import React, { useState } from "react";
import { BaseModal } from "./BaseModal";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/Modal/BaseModal", module);

story.add("BaseModal Component", () => {
  const [open, setOpen] = useState(true);

  return (
    <BaseModal open={open} setOpen={setOpen}>
      Hello World
    </BaseModal>
  );
});
