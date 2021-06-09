import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { Page } from "templates";
import { ProfilePageContainer } from "./ProfilePage.styled";

export const ProfilePage = () => {
  const user = useSelector((state: IRootState) => state.user);

  return (
    <Page title="Profile" isLoggedIn={true}>
      <ProfilePageContainer>Hello World</ProfilePageContainer>
    </Page>
  );
};
