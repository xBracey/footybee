import React, { useState } from "react";
import { ForgotPasswordCard } from "./ForgotPasswordCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const story = storiesOf("Components/Login/ForgotPasswordCard", module);

story.add("ForgotPasswordCard Component", () => {
  const [email, setEmail] = useState("");

  return (
    <ForgotPasswordCard
      email={email}
      setEmail={setEmail}
      onSubmit={action("Submit")}
    />
  );
});
