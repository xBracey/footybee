import React, { FC } from "react";
import { icons } from "assets";
import {
  LoginSidebarContainer,
  LogoContainer,
  PredictorText,
  SidebarInfo,
  SidebarInfoText,
  SidebarInfoContainer,
} from "./LoginSidebar.styled";

interface ISidebarInfo {
  SVG: FC;
  text: string;
}

interface ILoginSidebar {
  sidebarInfo: ISidebarInfo[];
}

export const LoginSidebar = ({ sidebarInfo }: ILoginSidebar) => {
  return (
    <LoginSidebarContainer>
      <LogoContainer>
        <icons.logo />
      </LogoContainer>
      <PredictorText>Euro 2020 Football Predictor</PredictorText>
      <SidebarInfoContainer>
        {sidebarInfo.map(info => (
          <SidebarInfo>
            <info.SVG />
            <SidebarInfoText>{info.text}</SidebarInfoText>
          </SidebarInfo>
        ))}
      </SidebarInfoContainer>
    </LoginSidebarContainer>
  );
};
