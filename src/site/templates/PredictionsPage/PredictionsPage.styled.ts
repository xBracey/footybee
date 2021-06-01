import { ButtonContainer } from "components/Button/Button.styled";
import styled from "styled-components";
import { colours, fonts } from "theme";
import { PageInnerContainer } from "../Page/Page.styled";

export const PredictionsPageContainer = styled.span`
  ${PageInnerContainer} {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
`;

export const ExtraPredictionsContainer = styled.div`
  background-color: ${colours.green300};
  padding: 40px 0 10px 0;
`;

export const ExtraFlexs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 20px;
`;

export const ExtraFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  flex-direction: column;

  ${ButtonContainer} {
    margin: 20px;
  }
`;

export const ExtraHeader = styled.p`
  color: ${colours.white};
  text-align: center;
  font-size: ${fonts.size.header2};
  margin: 0px;
`;

export const ExtraText = styled.p`
  color: ${colours.white};
  text-align: center;
  font-size: ${fonts.size.header3};
  margin: 10px;
`;
