import React from "react";
import { Header } from "./Header";
import { storiesOf } from "@storybook/react";
import { headerData } from "data";

const story = storiesOf("Components/Header", module);

story.add("Header Component", () => (
  <Header menu={headerData(false, "test")} />
));

story.add("Header Component is admin", () => (
  <Header menu={headerData(true, "test")} />
));
