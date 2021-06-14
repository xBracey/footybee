import styled from "styled-components";
import { colours, fonts } from "theme";

interface IKnockoutCard {
  isWinning: boolean;
}

export const KnockoutPredictionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const KnockoutName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colours.blue300};
  font-size: ${fonts.size.large};
  padding: 20px 30px 10px 30px;
  transition: all 0.25s;
`;

export const KnockoutCard = styled.div<IKnockoutCard>`
  border-radius: 6px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  position: relative;
  margin: 16px;
  cursor: pointer;
  transition: all 0.25s;

  ${KnockoutName} {
    border-bottom: 1px solid
      ${props => {
        if (props.isWinning === null) {
          return colours.grey100;
        }
        if (props.isWinning) {
          return "rgba(0,153,117,0.7)";
        }
        return "rgba(243,94,94,0.7)";
      }};
  }

  background-color: ${props => {
    if (props.isWinning === null) {
      return colours.white;
    }
    if (props.isWinning) {
      return "rgba(0,153,117,0.2)";
    }
    return "rgba(243,94,94,0.2)";
  }};

  path {
    transition: all 0.25s;
    fill: ${props => {
      if (props.isWinning === null) {
        return colours.grey150;
      }
      if (props.isWinning) {
        return colours.green200;
      }
      return colours.red100;
    }};
  }
`;

export const KnockoutIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px 10px 30px;
`;

export const ResultFlagContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colours.grey300};
  margin-right: 16px;
`;

export const ResultFlag = styled.img`
  height: 40px;
`;

export const KnockoutVS = styled.p`
  color: ${colours.blue300};
  font-size: ${fonts.size.header2};
`;
