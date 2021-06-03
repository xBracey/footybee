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
import { BackButton, TwoInputContainer } from "./RegisterCard.styled";
import { isEmail, isMandatory, isPasswordMatch, validateInputs } from "lib";

let hasBlurred = [false, false, false, false];

interface IRegisterCard {
  username: string;
  setUsername: (username: string) => void;
  email: string;
  setEmail: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  onSubmit: () => void;
}

export const RegisterCard = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
}: IRegisterCard) => {
  useEffect(() => {
    hasBlurred = [false, false, false, false];
  }, []);

  const [validation, setValidation] = useState({
    errorMessages: ["", "", "", ""],
    isDisabled: true,
  });

  const onBlurHandler = (index: number) => {
    hasBlurred[index] = true;

    const newValidation = validateInputs([
      {
        value: username,
        hasBlurred: hasBlurred[0],
        validation: [isMandatory],
      },
      {
        value: email,
        hasBlurred: hasBlurred[1],
        validation: [isMandatory, isEmail],
      },
      {
        value: password,
        hasBlurred: hasBlurred[2],
        validation: [isMandatory],
      },
      {
        value: confirmPassword,
        hasBlurred: hasBlurred[3],
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
        <CardHeader>Register</CardHeader>

        <TextInput
          text={username}
          setText={setUsername}
          placeholder="Username"
          error={validation.errorMessages[0]}
          onBlurHandler={() => onBlurHandler(0)}
        />
        <TextInput
          text={email}
          setText={setEmail}
          placeholder="Email"
          type="email"
          error={validation.errorMessages[1]}
          onBlurHandler={() => onBlurHandler(1)}
        />

        <TwoInputContainer>
          <TextInput
            text={password}
            setText={setPassword}
            type="password"
            placeholder="Password"
            error={validation.errorMessages[2]}
            onBlurHandler={() => onBlurHandler(2)}
          />
          <TextInput
            text={confirmPassword}
            setText={setConfirmPassword}
            type="password"
            placeholder="Confirm Password"
            error={validation.errorMessages[3]}
            onBlurHandler={() => onBlurHandler(3)}
          />
        </TwoInputContainer>
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
