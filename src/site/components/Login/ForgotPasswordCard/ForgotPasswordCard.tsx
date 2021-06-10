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
import { isEmail, isMandatory, validateInputs } from "lib";

let hasBlurred = [false];

interface IForgotPasswordCard {
  email: string;
  setEmail: (password: string) => void;
  onSubmit: () => void;
}

export const ForgotPasswordCard = ({
  email,
  setEmail,
  onSubmit,
}: IForgotPasswordCard) => {
  useEffect(() => {
    hasBlurred = [false, false];
  }, []);

  const [validation, setValidation] = useState({
    errorMessages: [""],
    isDisabled: true,
  });

  const onBlurHandler = (index: number) => {
    hasBlurred[index] = true;
  };

  const validate = () => {
    const newValidation = validateInputs([
      {
        value: email,
        hasBlurred: hasBlurred[0],
        validation: [isMandatory, isEmail],
      },
    ]);

    setValidation(newValidation);
  };

  useEffect(() => {
    validate();
  }, [email]);

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
          text={email}
          setText={(text: string) => {
            setEmail(text);
          }}
          type="email"
          placeholder="Email"
          error={validation.errorMessages[0]}
          onBlurHandler={() => onBlurHandler(0)}
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
