import Link from "next/link";
import React, { useEffect, useState } from "react";
import { isMandatory, validateInputs } from "lib";
import { Button } from "../../Button";
import { TextInput } from "../../Input";
import {
  CardFooter,
  CardHeader,
  CardLink,
  LoginCardContainer,
  CardMain,
  ForgotPasswordContainer,
  DummySubmit,
} from "./LoginCard.styled";

let hasBlurred = [false, false];

interface ILoginCard {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (username: string) => void;
  onSubmit: () => void;
}

export const LoginCard = ({
  username,
  setUsername,
  password,
  setPassword,
  onSubmit,
}: ILoginCard) => {
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
        value: username,
        hasBlurred: hasBlurred[0],
        validation: [isMandatory],
      },
      {
        value: password,
        hasBlurred: hasBlurred[1],
        validation: [isMandatory],
      },
    ]);

    setValidation(newValidation);
  };

  return (
    <LoginCardContainer>
      <CardMain
        onSubmit={event => {
          event.preventDefault();
          if (!validation.isDisabled) onSubmit();
        }}
      >
        <CardHeader>Log in</CardHeader>
        <TextInput
          text={username}
          setText={setUsername}
          placeholder="Username"
          error={validation.errorMessages[0]}
          onBlurHandler={() => onBlurHandler(0)}
        />
        <TextInput
          text={password}
          setText={setPassword}
          type="password"
          placeholder="Password"
          error={validation.errorMessages[1]}
          onBlurHandler={() => onBlurHandler(1)}
        />
        <DummySubmit type="submit" />
        <ForgotPasswordContainer>
          <Link href="/">
            <CardLink>Forgot Password?</CardLink>
          </Link>
          <Button
            text="Submit"
            onClick={onSubmit}
            buttonType={"blue"}
            isDisabled={validation.isDisabled}
          />
        </ForgotPasswordContainer>
      </CardMain>
      <CardFooter>
        <Link href="/register">
          <CardLink>Don't have an account? Sign Up</CardLink>
        </Link>
      </CardFooter>
    </LoginCardContainer>
  );
};
