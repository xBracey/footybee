import React, { useState } from "react";
import { TextInput } from "./TextInput";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/Input/TextInput", module);

story.add("TextInput Component", () => {
  const [text, setText] = useState("");

  return <TextInput setText={setText} text={text} />;
});

story.add("TextInput Component w placeholder", () => {
  const [text, setText] = useState("");

  return (
    <TextInput setText={setText} text={text} placeholder="Enter Username" />
  );
});
