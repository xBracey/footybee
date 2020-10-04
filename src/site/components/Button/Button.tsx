import React, { MouseEvent } from "react";
import { ButtonOuterContainer, ButtonContainer } from "./Button.styled";

interface IButton {
  onClick: (event: MouseEvent) => void;
  text: string;
  buttonType: string;
}

export const Button = ({ onClick, text, buttonType }: IButton) => (
  <ButtonOuterContainer>
    <ButtonContainer buttonType={buttonType} onClick={onClick}>
      {text}
    </ButtonContainer>
  </ButtonOuterContainer>
);
