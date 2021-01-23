import styled from "styled-components";
import { colours } from "theme";

export const IconButtonContainer = styled.div`
  display: flex;
`;

export const IconButtonInnerContainer = styled.div`
  display: flex;
  padding: 4px;
  background-color: ${colours.blue300};
  border-radius: 50%;
  border: 4px solid ${colours.blue300};
  transition: all 0.2s;
  cursor: pointer;

  path {
    fill: ${colours.white};
  }

  &:hover {
    background-color: ${colours.white};
    path {
      fill: ${colours.blue200};
    }
  }

  &:active {
    transform: scale(0.92);
  }
`;
