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
import Link from "next/link";

export interface ISidebarInfo {
  SVG: FC;
  text: string;
}

export interface ISidebarMenu {
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
      <PredictorText>World Cup 2022 Football Predictor</PredictorText>
      <SidebarInfoContainer>
        {sidebarInfo.map(info => (
          <SidebarInfo key={info.text}>
            <info.SVG />
            <SidebarInfoText>{info.text}</SidebarInfoText>
          </SidebarInfo>
        ))}
      </SidebarInfoContainer>
      <SidebarMenuContainer>
        {sidebarMenu.map(menu => (
          <Link href={menu.link} key={menu.text}>
            <SidebarMenu>{menu.text}</SidebarMenu>
          </Link>
        ))}
      </SidebarMenuContainer>
    </LoginSidebarContainer>
  );
};
