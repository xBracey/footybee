import styled, { css } from "styled-components";
import { colours } from "theme";

interface IPredictionLeagueTableRow {
  points: number;
}

const NoPoints = css`
  background-color: ${colours.red300};
`;

const MidPoints = css`
  background-color: ${colours.amber};
`;

const FullPoints = css`
  background-color: ${colours.green300};
`;

export const PredictionLeagueTableRow = styled.div<IPredictionLeagueTableRow>`
  display: flex;
  padding: 12px;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  color: ${colours.white};

  ${props => {
    if (props.points >= 25) {
      return FullPoints;
    }
    if (props.points >= 1) {
      return MidPoints;
    }
    return NoPoints;
  }};
`;
