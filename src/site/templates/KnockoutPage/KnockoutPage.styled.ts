import {
  KnockoutPredictionContainer,
  KnockoutVS,
} from "components/KnockoutPrediction/KnockoutPrediction.styled";
import styled from "styled-components";
import { colours, device, fonts } from "theme";

export const KnockoutPageContainer = styled.div`
  background-color: ${colours.blue200};
  min-height: calc(100vh - 200px + 1px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KnockoutHeader = styled.h2`
  color: ${colours.blue300};
  font-weight: 500;
  margin: 16px 0;
  font-size: ${fonts.size.header2};
`;

export const KnockoutRoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:nth-child(2n) {
    background-color: ${colours.yellow100};
  }

  &:nth-child(2n + 1) {
    background-color: ${colours.grey100};
  }
`;

export const KnockoutRound = styled.div`
  display: flex;
  padding: 30px 10px;
  width: calc(100% - 20px);
  max-width: calc(1200px - 20px);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${KnockoutVS} {
    color: ${colours.blue300};
  }
`;

export const KnockoutMatches = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const FinalPredictionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colours.white};
  padding: 20px 0 40px 0;
`;

export const FinalPredictions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const FinalPrediction = styled.div`
  flex: 1;
  padding: 15px 20px;
`;

export const FinalPredictionBigHeader = styled.h2`
  font-weight: 500;
  padding: 10px 0;
`;

export const FinalPredictionHeader = styled.h3`
  font-weight: 500;
  text-align: center;
`;

export const FinalPredictionTeam = styled.p`
  text-align: center;
`;
