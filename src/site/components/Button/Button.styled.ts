import { colours } from "theme";
import styled from "styled-components";

interface IButtonContainer {
  buttonType: string;
}

export const ButtonOuterContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div<IButtonContainer>`
  background-color: ${props => {
    switch (props.buttonType) {
      case "blue":
        return colours.blue200;
      default:
        return colours.green200;
    }
  }};

  box-shadow: 0px 7px 0px 0px
    ${props => {
      switch (props.buttonType) {
        case "blue":
          return colours.blue300;
        default:
          return colours.green300;
      }
    }};
  color: ${colours.white};
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  font-weight: 500;

  &:hover {
    margin-top: 3px;
    margin-bottom: -3px;
    box-shadow: 0px 4px 0px 0px
      ${props => {
        switch (props.buttonType) {
          case "blue":
            return colours.blue300;
          default:
            return colours.green300;
        }
      }};
  }

  &:active {
    margin-top: 7px;
    margin-bottom: -7px;
    box-shadow: 0px 0px 0px 0px;
  }
`;
