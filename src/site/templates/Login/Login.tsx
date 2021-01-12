import React from "react";
import {
  ISidebarInfo,
  ISidebarMenu,
  LoginCard,
  LoginSidebar,
} from "components";
import { LoginContainer, LoginCardContainer } from "./Login.styled";

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
  <LoginContainer>
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
  </LoginContainer>
);
