import React, { useState } from "react";
import { SelectInput } from "./SelectInput";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/Input/SelectInput", module);

export const generateOptions = (number: number) =>
  Array(number)
    .fill(null)
    .map((value, index) => ({
      value: `Value ${index}`,
      label: `Label ${index}`,
    }));

story.add("SelectInput Component", () => {
  const [option, setOption] = useState(null);

  return (
    <div style={{ height: "800px" }}>
      <SelectInput
        option={option}
        setOption={setOption}
        options={generateOptions(3)}
        placeholder="Select a player"
      />
    </div>
  );
});
