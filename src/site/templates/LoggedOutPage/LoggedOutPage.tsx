import React, { ReactNode } from "react";
import { Head, LoginMobileHeader, LoginSidebar } from "components";
import {
  LoggedOutPageContainer,
  LoggedOutCardContainer,
} from "./LoggedOutPage.styled";
import { Message } from "../Message";
import { loginData } from "data";

interface ILoggedOutPage {
  children: ReactNode;
}

export const LoggedOutPage = ({ children }: ILoggedOutPage) => {
  const { sidebarInfo, sidebarMenu } = loginData;

  return (
    <>
      <LoggedOutPageContainer>
        <LoginSidebar sidebarInfo={sidebarInfo} sidebarMenu={sidebarMenu} />
        <LoggedOutCardContainer>{children}</LoggedOutCardContainer>
        <LoginMobileHeader />
      </LoggedOutPageContainer>
      <Message />
      <Head title={`FootyBee - Home`} />
    </>
  );
};
