import { UserTable } from "components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeague } from "redux/actions";
import { IRootState } from "redux/reducers";
import { Page } from "templates";
import { colours } from "theme";
import { LeaguePageContainer, LeaguePageHeader } from "./LeaguePage.styled";

interface ILeaguePage {
  name: string;
}

export const LeaguePage = ({ name }: ILeaguePage) => {
  const dispatch = useDispatch();

  const leagues = useSelector((state: IRootState) => state.leagues);

  useEffect(() => {
    dispatch(getLeague(name));
  }, []);

  const leagueName =
    leagues.leagues[name]?.name === "global"
      ? "Global Leaderboard"
      : leagues.leagues[name]?.name;

  return (
    <Page title="League" isLoggedIn={true} backgroundColour={colours.green300}>
      <LeaguePageContainer>
        <LeaguePageHeader>{leagueName}</LeaguePageHeader>
        <UserTable users={leagues.leagues[name]?.users ?? []} />
      </LeaguePageContainer>
    </Page>
  );
};
1;
