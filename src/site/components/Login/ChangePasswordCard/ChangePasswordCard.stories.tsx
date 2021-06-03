import React, { useState } from "react";
import { ChangePasswordCard } from "./ChangePasswordCard";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const story = storiesOf("Components/Login/ChangePasswordCard", module);

story.add("ChangePasswordCard Component", () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ChangePasswordCard
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      onSubmit={action("Submit")}
    />
  );
});
