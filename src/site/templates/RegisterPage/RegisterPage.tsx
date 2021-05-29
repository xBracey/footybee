import {
  ISidebarInfo,
  ISidebarMenu,
  RegisterCard,
  LoginSidebar,
  LoginMobileHeader,
} from "components";
import React from "react";
import { Message } from "../Message";
import {
  RegisterCardContainer,
  RegisterPageContainer,
} from "../RegisterPage/RegisterPage.styled";

interface IRegisterPage {
  username: string;
  setUsername: (username: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  sidebarInfo: ISidebarInfo[];
  sidebarMenu: ISidebarMenu[];
  onSubmit: () => void;
}

export const RegisterPage = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  sidebarInfo,
  sidebarMenu,
  onSubmit,
}: IRegisterPage) => (
  <>
    <RegisterPageContainer>
      <LoginSidebar sidebarInfo={sidebarInfo} sidebarMenu={sidebarMenu} />
      <RegisterCardContainer>
        <RegisterCard
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          onSubmit={onSubmit}
        />
      </RegisterCardContainer>
      <LoginMobileHeader />
    </RegisterPageContainer>
    <Message />
  </>
);
