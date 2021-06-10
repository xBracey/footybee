import { TextInput } from "../../Input";
import React, { useEffect, useState } from "react";
import {
  CardMain,
  LoginCardContainer,
  CardHeader,
  DummySubmit,
} from "../LoginCard/LoginCard.styled";
import { Button } from "../../Button";
import { IconButton } from "../../IconButton";
import { icons } from "assets";
import { BackButton } from "../RegisterCard/RegisterCard.styled";
import { isMandatory, isPasswordMatch, validateInputs } from "lib";

let hasBlurred = [false, false];

interface IChangePasswordCard {
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  onSubmit: () => void;
}

export const ChangePasswordCard = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
}: IChangePasswordCard) => {
  useEffect(() => {
    hasBlurred = [false, false];
  }, []);

  const [validation, setValidation] = useState({
    errorMessages: ["", ""],
    isDisabled: true,
  });

  const onBlurHandler = (index: number) => {
    hasBlurred[index] = true;

    const newValidation = validateInputs([
      {
        value: password,
        hasBlurred: hasBlurred[0],
        validation: [isMandatory],
      },
      {
        value: confirmPassword,
        hasBlurred: hasBlurred[1],
        validation: [isMandatory, isPasswordMatch(password)],
      },
    ]);

    setValidation(newValidation);
  };

  return (
    <LoginCardContainer>
      <BackButton>
        <IconButton SVG={icons.back} link="/login" />
      </BackButton>
      <CardMain
        onSubmit={event => {
          event.preventDefault();
          if (!validation.isDisabled) onSubmit();
        }}
      >
        <CardHeader>Forgot Password</CardHeader>

        <TextInput
          text={password}
          setText={setPassword}
          type="password"
          placeholder="New Password"
          error={validation.errorMessages[0]}
          onBlurHandler={() => onBlurHandler(0)}
        />
        <TextInput
          text={confirmPassword}
          setText={setConfirmPassword}
          type="password"
          placeholder="Confirm New Password"
          error={validation.errorMessages[1]}
          onBlurHandler={() => onBlurHandler(1)}
        />
        <DummySubmit type="submit" />

        <Button
          text="Submit"
          onClick={onSubmit}
          buttonType="blue"
          isDisabled={validation.isDisabled}
        />
      </CardMain>
    </LoginCardContainer>
  );
};
