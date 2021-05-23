import React from "react";
import {
  Head,
  ISidebarInfo,
  ISidebarMenu,
  LoginCard,
  LoginSidebar,
} from "components";
import { LoginPageContainer, LoginCardContainer } from "./LoginPage.styled";
import { Message } from "../Message";

interface ILogin {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (username: string) => void;
  sidebarInfo: ISidebarInfo[];
  sidebarMenu: ISidebarMenu[];
  onSubmit: () => void;
}

export const LoginPage = ({
  username,
  setUsername,
  password,
  setPassword,
  sidebarInfo,
  sidebarMenu,
  onSubmit,
}: ILogin) => (
  <>
    <LoginPageContainer>
      <LoginSidebar sidebarInfo={sidebarInfo} sidebarMenu={sidebarMenu} />
      <LoginCardContainer>
        <LoginCard
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
        />
      </LoginCardContainer>
    </LoginPageContainer>
    <Message />
    <Head title={`FootyBee - Home`} />
  </>
);
