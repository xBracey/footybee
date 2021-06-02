import React, { useState } from "react";
import { ForgotPasswordCard } from "./ForgotPasswordCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const story = storiesOf("Components/Login/ForgotPasswordCard", module);

story.add("ForgotPasswordCard Component", () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ForgotPasswordCard
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      onSubmit={action("Submit")}
    />
  );
});
