import styled from "styled-components";
import { colours, fonts } from "theme";

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ResultFlagContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colours.grey300};
`;

export const ResultScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ResultFlag = styled.img`
  height: 40px;
  /* width: 80px; */
`;

export const ResultScore = styled.p`
  margin: 4px 16px 0 16px;
  font-size: ${fonts.size.header3};
`;

export const ResultDate = styled.p`
  margin: 0 16px;
  font-size: ${fonts.size.extraSmall};
`;
