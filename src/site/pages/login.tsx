import React, { useState } from "react";
import { LoginPage } from "templates";
import { icons } from "assets";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <LoginPage
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      sidebarInfo={sidebarInfo}
      sidebarMenu={sidebarMenu}
    />
  );
};

export default Login;
