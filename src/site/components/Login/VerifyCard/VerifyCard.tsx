import React from "react";
import { CardMain, LoginCardContainer } from "../LoginCard/LoginCard.styled";
import { IconButton } from "../../IconButton";
import { icons } from "assets";
import { BackButton } from "../RegisterCard/RegisterCard.styled";
import { VerifyCardHeader } from "./VerifyCard.styled";

export const VerifyCard = () => {
  return (
    <LoginCardContainer>
      <BackButton>
        <IconButton SVG={icons.back} link="/login" />
      </BackButton>
      <CardMain>
        <VerifyCardHeader>Verifying User...</VerifyCardHeader>
      </CardMain>
    </LoginCardContainer>
  );
};
