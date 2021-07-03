import {
  Button,
  TextInput,
  Overview,
  PredictionsBreakdown,
  KnockoutBreakdown,
} from "components";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDisplayName,
  getGroupMatches,
  getTeamPredictions,
  getTeams,
  getUser,
} from "redux/actions";
import { IRootState } from "redux/reducers";
import { AppDispatch } from "redux/store";
import { predictionLock } from "src/site/lib/predictionLock";
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
  ProfileExtraPrediction,
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
  const teams = useSelector((state: IRootState) => state.teams);
  const teamPredictions = useSelector(
    (state: IRootState) => state.teamPredictions
  );
  const user = users.users[username];

  useEffect(() => {
    dispatch(getUser());
    dispatch(getGroupMatches());
    dispatch(getProfileUser(username)).then(() => {
      dispatch(getProfilePredictions(username));
    });
    dispatch(getTeams());
    dispatch(getTeamPredictions(username));
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

  const fixtures = groupMatches.groupMatches.map(match => {
    const prediction = user?.predictions.find(
      prediction => prediction.groupMatchId === match.id
    );

    return {
      fixture: `${match.homeTeam} vs ${match.awayTeam}`,
      score:
        match.homeGoals !== null && match.awayGoals !== null
          ? `${match.homeGoals}-${match.awayGoals}`
          : "N/A",
      prediction:
        prediction?.homeGoals !== null && prediction?.awayGoals !== null
          ? `${prediction?.homeGoals}-${prediction?.awayGoals}`
          : "N/A",
      points: prediction?.points,
    };
  });

  const knockoutPredictions =
    teams.teams.length && teamPredictions.predictions.length
      ? teamPredictions.predictions
          .filter(prediction => prediction.roundName)
          .map(prediction => {
            const teamMatch = teams.teams.find(
              team => team.name === prediction.teamName
            );

            return {
              teamName: prediction.teamName,
              roundName: prediction.roundName,
              points: prediction.points,
              isCorrect: teamMatch.roundName === prediction.roundName,
            };
          })
      : [];

  const pointsBreakdownComponent = predictionLock("") ? (
    <>
      <ProfileExtraPrediction>{`Winner Prediction - ${
        user?.winnerPrediction ?? "N/A"
      }`}</ProfileExtraPrediction>
      <ProfileExtraPrediction>{`Golden Boot Prediction - ${
        user?.goldenBootPrediction ?? "N/A"
      }`}</ProfileExtraPrediction>
      <PredictionsBreakdown fixtures={fixtures} />
      <KnockoutBreakdown predictions={knockoutPredictions} />
    </>
  ) : (
    <ProfileExtraPrediction>{"TBA"}</ProfileExtraPrediction>
  );

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
            {pointsBreakdownComponent}
          </ProfilePageInnerContainer>
        </ProfilePageMainContainer>
      </ProfileOuterContainer>
    </Page>
  );
};
