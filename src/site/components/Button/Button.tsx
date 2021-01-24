import React, { MouseEvent } from "react";
import { ButtonOuterContainer, ButtonContainer } from "./Button.styled";

interface IButton {
  onClick: (event: MouseEvent) => void;
  text: string;
  buttonType: string;
  isDisabled?: boolean;
}

export const Button = ({ onClick, text, buttonType, isDisabled }: IButton) => {
  const onPress = (event: MouseEvent) => {
    if (!isDisabled) onClick(event);
  };

  return (
    <ButtonOuterContainer>
      <ButtonContainer
        buttonType={buttonType}
        onClick={onPress}
        isDisabled={isDisabled}
      >
        {text}
      </ButtonContainer>
    </ButtonOuterContainer>
  );
};
