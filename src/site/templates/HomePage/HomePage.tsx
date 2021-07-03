import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { LeaguesTable, Overview, TodaysMatches } from "components";
import {
  getGroupMatches,
  getKnockoutMatches,
  getUserPoints,
} from "redux/actions";
import { Page } from "../Page";
import {
  AddLeagueText,
  HomePageContainer,
  HomePageInnerContainer,
} from "./HomePage.styled";
import { AddLeague } from "./HomePageComponents";
import { colours } from "theme";
import { useRouter } from "next/router";

interface IHomePage {
  username: string;
}

export const HomePage = ({ username }: IHomePage) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const user = useSelector((state: IRootState) => state.user);
  const knockoutMatches = useSelector(
    (state: IRootState) => state.knockoutMatches
  );

  useEffect(() => {
    if (user.username) {
      dispatch(getKnockoutMatches());
      dispatch(getUserPoints());
    }
  }, [user.username]);

  const todayMatches = knockoutMatches.knockoutMatches.filter(match =>
    moment(match.date).isSame(new Date(), "day")
  );

  return (
    <Page
      title="Home"
      isLoggedIn
      loading={!username}
      usePadding={false}
      backgroundColour={colours.green200}
    >
      <Overview
        name={user.username}
        points={user.points}
        pointsToday={user.pointsToday}
        favLeagueName={"Global"}
        favLeagueRank={user?.globalRank ?? 1}
      />
      <TodaysMatches groupMatches={todayMatches} />
      <HomePageContainer>
        <HomePageInnerContainer>
          <AddLeagueText>{`${user.username}'s Leagues`}</AddLeagueText>
          <LeaguesTable
            leagues={user.userLeagues}
            onLeagueClick={name => {
              router.push(`/league/${name}`);
            }}
          />
          <AddLeague />
        </HomePageInnerContainer>
      </HomePageContainer>
    </Page>
  );
};
