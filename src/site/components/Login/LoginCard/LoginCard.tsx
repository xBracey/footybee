import Link from "next/link";
import React from "react";
import { Button } from "../../Button";
import { TextInput } from "../../Input";
import {
  CardFooter,
  CardHeader,
  CardLink,
  LoginCardContainer,
  CardMain,
} from "./LoginCard.styled";

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
  return (
    <LoginCardContainer>
      <CardMain>
        <CardHeader>Log in</CardHeader>
        <TextInput
          text={username}
          setText={setUsername}
          placeholder="Username"
        />
        <TextInput
          text={password}
          setText={setPassword}
          type="password"
          placeholder="Password"
        />
        <Button text="Submit" onClick={onSubmit} buttonType={"blue"} />
        <Link href="/">
          <CardLink>Forgot Password?</CardLink>
        </Link>
      </CardMain>
      <CardFooter>
        <Link href="/">
          <CardLink>Don't have an account? Sign Up</CardLink>
        </Link>
      </CardFooter>
    </LoginCardContainer>
  );
};
