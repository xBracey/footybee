import React from "react";
import { Page } from "../Page";
import { HomePageContainer } from "./HomePage.styled";

interface IHomePage {
  username: string;
}

export const HomePage = ({ username }: IHomePage) => {
  return (
    <Page title="Home" isLoggedIn loading={!username}>
      <HomePageContainer>{`Hello ${username}`}</HomePageContainer>
    </Page>
  );
};
