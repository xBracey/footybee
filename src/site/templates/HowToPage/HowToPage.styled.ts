import styled from "styled-components";
import { colours, fonts } from "theme";

export const HowToPageContainer = styled.div`
  padding: 20px 0 80px 0;
  height: 100%;

  color: ${colours.white};
`;

export const HowToPageInnerContainer = styled.div`
  width: calc(100% - 32px);
  max-width: calc(1000px - 32px);
`;

export const WelcomeHeader = styled.h1`
  margin: 32px 16px;
  font-size: ${fonts.size.header1};
  font-weight: 500;
  text-align: center;
`;

export const WelcomeDescription = styled.p`
  margin: 16px;
  font-size: ${fonts.size.large};
  font-weight: 400;
  text-align: center;
`;

export const WelcomeCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colours.blue300};
  padding: 16px 0;
`;

export const WelcomeCard = styled.div`
  background-color: ${colours.white};
  flex: 1;
  border-radius: 6px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 8px 32px;
  margin: 16px;
  height: 250px;
`;

export const WelcomeCardHeader = styled.h2`
  margin: 16px 8px;
  font-size: ${fonts.size.header3};
  font-weight: 500;
  text-align: center;
`;

export const WelcomeCardDescription = styled.p`
  margin: 8px;
  font-size: ${fonts.size.medium};
  font-weight: 400;
`;
