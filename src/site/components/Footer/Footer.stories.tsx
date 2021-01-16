import React from "react";
import { Footer } from "./Footer";
import { storiesOf } from "@storybook/react";
import { footerData } from "data";

const story = storiesOf("Components/Footer", module);

story.add("Footer Component", () => <Footer {...footerData} />);
