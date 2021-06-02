import { TextInput } from "../../Input";
import React, { useEffect, useState } from "react";
import {
  CardMain,
  LoginCardContainer,
  CardHeader,
} from "../LoginCard/LoginCard.styled";
import { Button } from "../../Button";
import { IconButton } from "../../IconButton";
import { icons } from "assets";
import {
  BackButton,
  TwoInputContainer,
} from "../RegisterCard/RegisterCard.styled";
import { isMandatory, isPasswordMatch, validateInputs } from "lib";

let hasBlurred = [false, false];

interface IForgotPasswordCard {
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  onSubmit: () => void;
}

export const ForgotPasswordCard = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
}: IForgotPasswordCard) => {
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
      <CardMain>
        <CardHeader>Forgot Password</CardHeader>

        <TextInput
          text={password}
          setText={setPassword}
          type="password"
          placeholder="Password"
          error={validation.errorMessages[0]}
          onBlurHandler={() => onBlurHandler(0)}
        />
        <TextInput
          text={confirmPassword}
          setText={setConfirmPassword}
          type="password"
          placeholder="Confirm Password"
          error={validation.errorMessages[1]}
          onBlurHandler={() => onBlurHandler(1)}
        />

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
