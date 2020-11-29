import React, { FC } from "react";
import { icons } from "assets";
import {
  LoginSidebarContainer,
  LogoContainer,
  PredictorText,
  SidebarInfo,
  SidebarInfoText,
  SidebarInfoContainer,
  SidebarMenuContainer,
  SidebarMenu,
} from "./LoginSidebar.styled";
import { Link } from "gatsby";

interface ISidebarInfo {
  SVG: FC;
  text: string;
}

interface ISidebarMenu {
  text: string;
  link: string;
}

interface ILoginSidebar {
  sidebarInfo: ISidebarInfo[];
  sidebarMenu: ISidebarMenu[];
}

export const LoginSidebar = ({ sidebarInfo, sidebarMenu }: ILoginSidebar) => {
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
      <SidebarMenuContainer>
        {sidebarMenu.map(menu => (
          <Link to={menu.link}>
            <SidebarMenu>{menu.text}</SidebarMenu>
          </Link>
        ))}
      </SidebarMenuContainer>
    </LoginSidebarContainer>
  );
};
