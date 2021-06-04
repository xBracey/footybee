import { TextInputContainer } from "components/Input/TextInput/TextInput.styled";
import styled from "styled-components";
import { colours, fonts } from "theme";

export const HomePageContainer = styled.div`
  padding: 20px 0 80px 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomePageInnerContainer = styled.div`
  width: calc(100% - 32px);
  max-width: calc(1000px - 32px);
`;

export const AddLeagueFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  flex-wrap: wrap;

  ${TextInputContainer} {
    padding: 0;
  }
`;

export const AddLeagueText = styled.p`
  color: ${colours.white};
  text-align: center;
  font-size: ${fonts.size.header3};
  margin: 24px 0 0 0;
`;

export const AddLeagueDescription = styled.p`
  color: ${colours.white};
  text-align: center;
  font-size: ${fonts.size.small};
  margin: 8px 0;
  width: 80%;
`;

export const SingleAddLeague = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
