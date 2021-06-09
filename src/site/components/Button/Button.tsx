import { icons } from "assets";
import React, { MouseEvent } from "react";
import { ButtonOuterContainer, ButtonContainer } from "./Button.styled";

interface IButton {
  onClick: (event: MouseEvent) => void;
  text: string;
  buttonType: string;
  isDisabled?: boolean;
  isLocked?: boolean;
}

export const Button = ({
  onClick,
  text,
  buttonType,
  isDisabled,
  isLocked,
}: IButton) => {
  const onPress = (event: MouseEvent) => {
    if (!isDisabled && !isLocked) onClick(event);
  };

  const lockedComponent = isLocked ? <icons.lock /> : null;

  return (
    <ButtonOuterContainer>
      <ButtonContainer
        buttonType={buttonType}
        onClick={onPress}
        isDisabled={isDisabled || isLocked}
      >
        {lockedComponent}
        {text}
      </ButtonContainer>
    </ButtonOuterContainer>
  );
};
