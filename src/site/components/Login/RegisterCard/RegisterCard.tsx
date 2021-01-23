import { TextInput } from "../../Input";
import React from "react";
import {
  CardMain,
  LoginCardContainer,
  CardHeader,
} from "../LoginCard/LoginCard.styled";
import { Button } from "../../Button";
import { IconButton } from "../../IconButton";
import { icons } from "assets";
import { BackButton, TwoInputContainer } from "./RegisterCard.styled";

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
  return (
    <LoginCardContainer>
      <BackButton>
        <IconButton SVG={icons.back} link="/login" />
      </BackButton>
      <CardMain>
        <CardHeader>Register</CardHeader>

        <TextInput
          text={username}
          setText={setUsername}
          placeholder="Username"
        />
        <TextInput
          text={email}
          setText={setEmail}
          placeholder="Email"
          type="email"
        />

        <TwoInputContainer>
          <TextInput
            text={password}
            setText={setPassword}
            type="password"
            placeholder="Password"
          />
          <TextInput
            text={confirmPassword}
            setText={setConfirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
        </TwoInputContainer>
        <Button text="Submit" onClick={onSubmit} buttonType={"blue"} />
      </CardMain>
    </LoginCardContainer>
  );
};
