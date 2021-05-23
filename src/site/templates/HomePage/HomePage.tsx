import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { Overview, TodaysMatches } from "components";
import { getGroupMatches, getUserPoints } from "redux/actions";
import { Page } from "../Page";
import { HomePageContainer } from "./HomePage.styled";

interface IHomePage {
  username: string;
}

export const HomePage = ({ username }: IHomePage) => {
  const dispatch = useDispatch();

  const user = useSelector((state: IRootState) => state.user);
  const groupMatches = useSelector((state: IRootState) => state.groupMatches);

  useEffect(() => {
    if (user.username) {
      dispatch(getGroupMatches());
      dispatch(getUserPoints());
    }
  }, [user.username]);

  const todayMatches = groupMatches.groupMatches.filter(match =>
    moment(match.date).isSame(new Date(), "day")
  );

  return (
    <Page title="Home" isLoggedIn loading={!username} usePadding={false}>
      <Overview
        name={user.username}
        points={user.points}
        pointsToday={user.pointsToday}
        favLeagueName={"Test"}
        favLeagueRank={1}
      />
      <TodaysMatches groupMatches={todayMatches} />
      <HomePageContainer></HomePageContainer>
    </Page>
  );
};
