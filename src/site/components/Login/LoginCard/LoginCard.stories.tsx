import React, { useState } from "react";
import { LoginCard } from "./LoginCard";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/LoginCard", module);

story.add("LoginCard Component", () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginCard
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
});
