import "typeface-poppins";
import "typeface-roboto";
import React from "react";
import { GlobalStyles } from "../src/site/theme";

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
