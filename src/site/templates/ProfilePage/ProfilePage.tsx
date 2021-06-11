import { Button, TextInput, Overview } from "components";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDisplayName, getGroupMatches, getUser } from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import {
  getProfilePredictions,
  getProfileUser,
} from "src/site/redux/actions/users";
import { Page } from "templates";
import {
  ProfilePageTopContainer,
  ProfilePageMainContainer,
  ProfilePageInnerContainer,
  ProfileOuterContainer,
  ProfileHeader,
  ProfileLoggedInContainer,
  ProfileDisplayName,
  ProfileDisplayNameLabel,
  ProfilePageHeaderContainer,
} from "./ProfilePage.styled";

interface IProfilePage {
  username: string;
}

export const ProfilePage = ({ username }: IProfilePage) => {
  const dispatch: AppDispatch = useDispatch();

  const [displayName, setDisplayName] = useState("");

  const groupMatches = useSelector((state: IRootState) => state.groupMatches);
  const loggedInUser = useSelector((state: IRootState) => state.user);
  const users = useSelector((state: IRootState) => state.users);
  const user = users.users[username];

  useEffect(() => {
    dispatch(getUser());
    dispatch(getGroupMatches());
    dispatch(getProfileUser(username)).then(() => {
      dispatch(getProfilePredictions(username));
    });
  }, []);

  const onSubmit = () => {
    if (displayName) {
      dispatch(changeDisplayName(displayName));
    }
  };

  const logoutButton =
    loggedInUser.username && loggedInUser.username === user?.username ? (
      <Link href="/logout">
        <Button text={"Logout"} buttonType="red" onClick={() => {}} />
      </Link>
    ) : null;

  const isUserComponent =
    loggedInUser.username && loggedInUser.username === user?.username ? (
      <ProfilePageTopContainer>
        <ProfilePageInnerContainer>
          <ProfileHeader>{`Profile Admin`}</ProfileHeader>
          <ProfileLoggedInContainer>
            <ProfileDisplayName>
              <ProfileDisplayNameLabel>
                Change Team Name
              </ProfileDisplayNameLabel>
              <TextInput
                text={displayName}
                setText={setDisplayName}
                placeholder={"Change Team Name"}
              />
              <Button
                text={"Submit"}
                buttonType="blue"
                onClick={onSubmit}
                isDisabled={!displayName}
              />
            </ProfileDisplayName>
          </ProfileLoggedInContainer>
        </ProfilePageInnerContainer>
      </ProfilePageTopContainer>
    ) : null;

  return (
    <Page title="Profile" isLoggedIn={true} usePadding={false}>
      <ProfileOuterContainer>
        <ProfilePageHeaderContainer>
          <ProfilePageInnerContainer>
            <Overview
              name={`${user?.username}'s profile`}
              points={user?.points}
              pointsToday={0}
              favLeagueName={"Global"}
              favLeagueRank={user?.globalRank ?? 1}
            />
            {logoutButton}
          </ProfilePageInnerContainer>
        </ProfilePageHeaderContainer>

        {isUserComponent}

        <ProfilePageMainContainer>
          <ProfilePageInnerContainer>
            <ProfileHeader>{`Points Breakdown`}</ProfileHeader>
            <ProfileHeader>{`TBA`}</ProfileHeader>
          </ProfilePageInnerContainer>
        </ProfilePageMainContainer>
      </ProfileOuterContainer>
    </Page>
  );
};
