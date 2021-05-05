import React, { useState } from "react";
import { DateInput } from "./DateInput";
import { storiesOf } from "@storybook/react";

const story = storiesOf("Components/DateInput", module);

story.add("DateInput Component", () => {
  const [date, setDate] = useState(new Date());
  return <DateInput date={date} setDate={setDate} />;
});
