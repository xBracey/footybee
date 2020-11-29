import React from "react";
import "typeface-poppins";
import "typeface-roboto";
import { LoginSidebar } from "components";
import { icons } from "assets";

const sidebarInfo = [
  {
    SVG: icons.scoreboard,
    text: "Predict each score for the upcoming Euro 2020 tournament",
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

const IndexPage = () => {
  return <LoginSidebar sidebarInfo={sidebarInfo} />;
};

export default IndexPage;
