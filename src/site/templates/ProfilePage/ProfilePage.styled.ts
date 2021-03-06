import { TextInputContainer } from "components/Input/TextInput/TextInput.styled";
import styled, { css } from "styled-components";
import { colours, device, fonts } from "theme";

const ProfilePageContainer = css`
  padding: 20px 0;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${colours.white};
`;

export const ProfilePageHeaderContainer = styled.div`
  ${ProfilePageContainer}
  background-color: ${colours.blue300};
`;

export const ProfilePageTopContainer = styled.div`
  ${ProfilePageContainer}
  background-color: ${colours.green300};
`;

export const ProfilePageInnerContainer = styled.div`
  width: calc(100% - 32px);
  max-width: calc(1000px - 32px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProfilePageMainContainer = styled.div`
  ${ProfilePageContainer}
  background-color: ${colours.green200};
  flex: 1;
`;

export const ProfileHeader = styled.h2`
  font-weight: 500;
  text-align: center;
`;

export const ProfileOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 200px);
`;

export const ProfileLoggedInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const ProfileDisplayName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 32px;

  ${TextInputContainer} {
    padding-bottom: 10px;
  }
`;

export const ProfileDisplayNameLabel = styled.p`
  margin: 10px 0;
  font-size: ${fonts.size.large};
  text-align: center;
`;

export const ProfileExtraPrediction = styled.p`
  text-align: center;
  font-size: ${fonts.size.large};
`;
