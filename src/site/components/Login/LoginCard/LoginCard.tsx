import { Link } from "gatsby";
import React from "react";
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
}

export const LoginCard = ({
  username,
  setUsername,
  password,
  setPassword,
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
        <Link to="/">
          <CardLink>Forgot Password?</CardLink>
        </Link>
      </CardMain>
      <CardFooter>
        <Link to="/">
          <CardLink>Don't have an account? Sign Up</CardLink>
        </Link>
      </CardFooter>
    </LoginCardContainer>
  );
};
