import React from "react";
import { LoginSidebar } from "./LoginSidebar";
import { storiesOf } from "@storybook/react";
import { icons } from "assets";

const story = storiesOf("Components/Login/LoginSidebar", module);
const sidebarInfo = [
  {
    SVG: icons.scoreboard,
    text: "Predict each score for the upcoming World Cup 2022 tournament",
  },
  {
    SVG: icons.trophy,
    text:
      "Gain points for how good your predictions are and compete with your friends in your own league",
  },

  {
    SVG: icons.customise,
    text:
      "Personalise your own leagues by allowing you to customise how points are distributed",
  },
];

const sidebarMenu = [
  {
    text: "About",
    link: "/",
  },
  {
    text: "T&Cs",
    link: "/",
  },
  {
    text: "Privacy",
    link: "/",
  },
];

story.add("LoginSidebar Component", () => (
  <LoginSidebar sidebarInfo={sidebarInfo} sidebarMenu={sidebarMenu} />
));
