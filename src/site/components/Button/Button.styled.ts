import { colours } from "theme";
import styled, { css } from "styled-components";

interface IButtonContainer {
  buttonType: string;
  isDisabled: boolean;
}

export const ButtonOuterContainer = styled.div`
  display: flex;
`;

const ButtonContainerPsuedo = css`
  &:hover {
    background-color: ${colours.white};
    color: ${props => {
      switch (props.buttonType) {
        case "blue":
          return colours.blue200;
        default:
          return colours.green200;
      }
    }};
    border: 4px solid
      ${props => {
        switch (props.buttonType) {
          case "blue":
            return colours.blue200;
          default:
            return colours.green200;
        }
      }};
  }

  &:active {
    transform: scale(0.92);
  }
`;

export const ButtonContainer = styled.div<IButtonContainer>`
  background-color: ${props => {
    if (props.isDisabled) {
      return colours.grey200;
    }

    switch (props.buttonType) {
      case "blue":
        return colours.blue200;
      default:
        return colours.green200;
    }
  }};
  color: ${colours.white};
  padding: 12px 24px;
  margin: 8px;
  border-radius: 8px;
  cursor: ${props => (props.isDisabled ? "auto" : "pointer")};
  transition: all 0.2s;
  user-select: none;
  font-weight: 500;
  border: 4px solid
    ${props => {
      switch (props.buttonType) {
        case "blue":
          return colours.blue300;
        default:
          return colours.green300;
      }
    }};

  ${props => (!props.isDisabled ? ButtonContainerPsuedo : null)}
`;
