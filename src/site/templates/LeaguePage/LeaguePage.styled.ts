import { ButtonContainer } from "components/Button/Button.styled";
import styled from "styled-components";
import { colours, device, fonts } from "theme";

export const LeaguePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LeaguePageInnerContainer = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  max-width: calc(1000px - 32px);
`;

export const LeaguePageHeader = styled.h1`
  width: calc(100% - 32px);
  padding: 16px;
  text-align: center;
  color: ${colours.white};
  font-weight: 500;
  margin: 0;
`;

export const LeaguePageHeaderContainer = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  background-color: ${colours.green300};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LeaguePageInfo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const LeaguePageCodeContainer = styled.div`
  text-align: center;
  margin: 0 40px 0 0;
  font-weight: 300;
  font-size: ${fonts.size.header3};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    margin: 10px 0 30px 0;
  }
`;

export const LeaguePageCodeTitle = styled.p`
  color: ${colours.white};
  font-size: ${fonts.size.header3};
  margin: 0 20px 0 0;
  font-weight: 400;

  @media ${device.mobile} {
    margin: 0 0 10px 0;
  }
`;

export const LeaguePageCode = styled.p`
  margin: 0;
  background-color: ${colours.white};
  border-radius: 6px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  color: ${colours.blue300};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${colours.blue300};
  font-size: ${fonts.size.large};
  word-break: break-all;

  input {
    opacity: 0;
    height: 0;
    width: 0;
    padding: 0;
    margin: 0;
  }

  svg {
    min-height: 24px;
    min-width: 24px;
    margin-left: 16px;

    path {
      fill: ${colours.blue300};
    }
  }
`;
