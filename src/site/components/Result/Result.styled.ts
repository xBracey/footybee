import styled from "styled-components";
import { colours, fonts } from "theme";

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
  transform: scale(0.9);
  touch-action: manipulation;
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
  width: 80px;
  height: 50px;
`;

export const ResultFlag = styled.img`
  height: 40px;
`;

export const ResultScore = styled.p`
  width: 100%;
  font-size: ${fonts.size.header2};
  white-space: pre;
  text-align: center;
`;

export const ResultDate = styled.p`
  margin: 4px 16px 0 16px;
  font-size: ${fonts.size.large};
`;

export const ResultDateTime = styled.p`
  margin: 0 16px;
  font-size: ${fonts.size.extraSmall};
`;

export const ResultTeam = styled.p`
  margin: 0 8px;
  width: 96px;
  line-height: 20px;

  &:first-child {
    text-align: right;
  }
`;
