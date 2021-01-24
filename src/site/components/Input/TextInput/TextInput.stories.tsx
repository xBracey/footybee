import React, { useState } from "react";
import { TextInput } from "./TextInput";
import { storiesOf } from "@storybook/react";
import { StorybookWrapper } from "theme";

const story = storiesOf("Components/Input/TextInput", module);

story.add("TextInput Component", () => {
  const [text, setText] = useState("");

  return (
    <StorybookWrapper>
      <TextInput setText={setText} text={text} />
    </StorybookWrapper>
  );
});

story.add("TextInput Component w placeholder", () => {
  const [text, setText] = useState("");

  return (
    <StorybookWrapper>
      <TextInput setText={setText} text={text} placeholder="Enter Username" />
    </StorybookWrapper>
  );
});

story.add("TextInput Component as password", () => {
  const [text, setText] = useState("");

  return (
    <StorybookWrapper>
      <TextInput
        setText={setText}
        text={text}
        placeholder="Enter Username"
        type={"password"}
      />
    </StorybookWrapper>
  );
});

story.add("TextInput Component with error", () => {
  const [text, setText] = useState("");

  return (
    <StorybookWrapper>
      <TextInput
        setText={setText}
        text={text}
        placeholder="Enter Username"
        error={text ? "Custom Error" : ""}
      />
    </StorybookWrapper>
  );
});
