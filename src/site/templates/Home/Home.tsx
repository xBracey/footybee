import React from "react";
import { Page } from "../Page";
import { HomeContainer } from "./Home.styled";

interface IHomePage {
  username: string;
}

export const HomePage = ({ username }: IHomePage) => {
  return (
    <Page title="Home" isLoggedIn loading={!username}>
      <HomeContainer>{`Hello ${username}`}</HomeContainer>
    </Page>
  );
};
