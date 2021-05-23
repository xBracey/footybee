import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { TodaysMatches } from "components";
import { getGroupMatches } from "src/site/redux/actions/groupMatches";
import { Page } from "../Page";
import { HomePageContainer } from "./HomePage.styled";

interface IHomePage {
  username: string;
}

export const HomePage = ({ username }: IHomePage) => {
  const dispatch = useDispatch();

  const groupMatches = useSelector((state: IRootState) => state.groupMatches);

  useEffect(() => {
    dispatch(getGroupMatches());
  }, []);

  const todayMatches = groupMatches.groupMatches.filter(match =>
    moment(match.date).isSame(new Date(), "day")
  );

  return (
    <Page title="Home" isLoggedIn loading={!username} usePadding={false}>
      <TodaysMatches groupMatches={todayMatches} />
      <HomePageContainer>{`Hello ${username}`}</HomePageContainer>
    </Page>
  );
};
