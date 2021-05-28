import styled from "styled-components";
import { colours } from "theme";

export const TodaysMatchesContainer = styled.div`
  background-color: ${colours.green300};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px 0;
`;

export const TodaysMatchesInnerContainer = styled.div`
  width: calc(100% - 32px);
  padding: 0px 16px 24px 16px;
  max-width: calc(1000px - 32px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: ${colours.white};
`;

export const TodaysMatchesHeader = styled.h2`
  color: ${colours.white};
  text-align: center;
  margin: 0;
  padding: 24px 0 24px 0;
  font-weight: 500;
`;
