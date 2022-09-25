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
        World Cup 2022 Football Predictor
      </LoginMobileHeaderText>
    </LoginMobileHeaderContainer>
  );
};
