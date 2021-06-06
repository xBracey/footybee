import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "redux/reducers";
import { Page } from "templates";
import { colours } from "theme";
import {
  HowToPageContainer,
  WelcomeCard,
  WelcomeCardDescription,
  WelcomeCardHeader,
  WelcomeCards,
  WelcomeDescription,
  WelcomeHeader,
} from "./HowToPage.styled";

export const HowToPage = () => {
  const user = useSelector((state: IRootState) => state.user);

  return (
    <Page title="HowTo" isLoggedIn={true} backgroundColour={colours.green300}>
      <HowToPageContainer>
        <WelcomeHeader>{`Welcome ${user.username}`}</WelcomeHeader>

        <WelcomeDescription>
          Welcome to FootyBee, a Euro 2020/21 football predictor where you can
          make predictions on games and create and join leagues with your
          friends. <br />
          <br />
          The football predictor consists of two rounds, one for the group
          stages of the competition, and one for the knockout stages. Below is a
          summary for how you gain points for each round
        </WelcomeDescription>

        <WelcomeCards>
          <WelcomeCard>
            <WelcomeCardHeader>Group Stage</WelcomeCardHeader>
            <WelcomeCardDescription>
              25 Points - Correct Score
              <br />
              15 Points - Correct Score Difference
              <br />5 Points - Correct Result
              <br /> <br />
              <b>Extras:</b>
              <br />
              50 Points - Pre Tournament Winner
              <br />
              50 Points - Golden Boot
            </WelcomeCardDescription>
          </WelcomeCard>

          <WelcomeCard>
            <WelcomeCardHeader>Knockout Stage</WelcomeCardHeader>
            <WelcomeCardDescription>
              15 Points - Correct Round of 16 Result
              <br />
              20 Points - Correct Quarter Final Result
              <br />
              30 Points - Correct Semi Final Result
              <br />
              40 Points - Correct Winner
            </WelcomeCardDescription>
          </WelcomeCard>
        </WelcomeCards>
      </HowToPageContainer>
    </Page>
  );
};
