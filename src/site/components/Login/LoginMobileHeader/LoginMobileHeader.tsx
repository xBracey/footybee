import { icons } from "assets";
import React from "react";
import {
  LoginMobileHeaderContainer,
  LoginMobileHeaderText,
} from "./LoginMobileHeader.styled";

interface ILoginMobileHeader {}

export const LoginMobileHeader = ({}: ILoginMobileHeader) => {
  return (
    <LoginMobileHeaderContainer>
      <icons.logo />
      <LoginMobileHeaderText>
        Euro 2020 Football Predictor
      </LoginMobileHeaderText>
    </LoginMobileHeaderContainer>
  );
};
