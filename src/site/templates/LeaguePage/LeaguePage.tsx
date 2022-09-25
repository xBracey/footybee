import { icons } from "assets";
import { Button, UserTable } from "components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserLeague, getLeague } from "redux/actions";
import { IRootState } from "redux/reducers";
import { Page } from "templates";
import { colours } from "theme";
import {
  LeaguePageCode,
  LeaguePageCodeContainer,
  LeaguePageCodeTitle,
  LeaguePageContainer,
  LeaguePageHeader,
  LeaguePageHeaderContainer,
  LeaguePageInfo,
  LeaguePageInnerContainer,
} from "./LeaguePage.styled";
import { types } from "redux/reducers";
import { useRouter } from "next/router";
import { AppDispatch } from "redux/store";
import * as clipboard from "clipboard-polyfill/text";

interface ILeaguePage {
  name: string;
}

export const LeaguePage = ({ name }: ILeaguePage) => {
  const dispatch: AppDispatch = useDispatch();

  const leagues = useSelector((state: IRootState) => state.leagues);

  const router = useRouter();

  useEffect(() => {
    dispatch(getLeague(name));
  }, []);

  const onLeaveClick = () => {
    dispatch(deleteUserLeague(leagues.leagues[name]?.code)).then(({ data }) => {
      if (!data.error) {
        setTimeout(() => {
          dispatch({ type: types.message.MESSAGE_RESET_MESSAGE });
          router.push("/");
        }, 2000);
      }
    });
  };

  const onCopyClick = async () => {
    if (clipboard?.writeText) {
      await clipboard.writeText(leagues.leagues[name]?.code);
    }

    alert("Copied");
  };

  const leagueName =
    leagues.leagues[name]?.name === "Global"
      ? "Global Leaderboard"
      : leagues.leagues[name]?.name;

  const leagueCodeComponent =
    leagues.leagues[name]?.name === "Global" ? null : (
      <LeaguePageCodeContainer>
        <LeaguePageCodeTitle>Code:</LeaguePageCodeTitle>
        <LeaguePageCode onClick={onCopyClick}>
          {leagues.leagues[name]?.code}
          <input
            id="codeInput"
            value={leagues.leagues[name]?.code}
            contentEditable={true}
          />
          <icons.copy />
        </LeaguePageCode>
      </LeaguePageCodeContainer>
    );

  const leaveLeagueComponent =
    leagues.leagues[name]?.name === "Global" ? null : (
      <Button text="Leave League" onClick={onLeaveClick} buttonType="red" />
    );

  return (
    <Page
      title="League"
      isLoggedIn={true}
      backgroundColour={colours.green200}
      usePadding={false}
    >
      <LeaguePageHeaderContainer>
        <LeaguePageHeader>{leagueName}</LeaguePageHeader>
        <LeaguePageInfo>
          {leagueCodeComponent}
          {leaveLeagueComponent}
        </LeaguePageInfo>
      </LeaguePageHeaderContainer>
      <LeaguePageContainer>
        <LeaguePageInnerContainer>
          <UserTable users={leagues.leagues[name]?.users ?? []} />
        </LeaguePageInnerContainer>
      </LeaguePageContainer>
    </Page>
  );
};
1;
