import React, { useState } from "react";
import { AsyncSelectInput } from "./AsyncSelectInput";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/Input/AsyncSelectInput", module);

export const generateOptions = (number: number) =>
  Array(number)
    .fill(null)
    .map((value, index) => ({
      value: `Value ${index}`,
      label: `Label ${index}`,
    }));

story.add("AsyncSelectInput Component", () => {
  const [option, setOption] = useState(null);

  const loadOptions = (search: string, callback) =>
    setTimeout(() => {
      callback(generateOptions(3));
    }, 500);

  return (
    <div style={{ height: "800px" }}>
      <AsyncSelectInput
        option={option}
        setOption={setOption}
        loadOptions={loadOptions}
        placeholder="Select a player"
      />
    </div>
  );
});
