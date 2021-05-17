import styled from "styled-components";
import { colours, fonts } from "theme";

export const PredictionScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  padding: 24px 0;
`;

export const PredictionInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    cursor: pointer;
    transform: scale(0.75);
  }

  svg:nth-child(3) {
    transform: rotate(180deg) scale(0.8);
  }
`;

export const PredictionDash = styled.p`
  margin: 0;
  font-size: ${fonts.size.header3};
  text-align: center;
  width: 10px;
`;

export const PredictionInput = styled.input`
  border: none;
  width: 30px;
  background-color: transparent;
  font-size: ${fonts.size.header3};
  text-align: center;
  height: 28px;
  line-height: 50px;
  padding-bottom: 2px;

  &:focus {
    outline: none;
  }
`;
