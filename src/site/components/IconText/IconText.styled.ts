import styled from "styled-components";
import { colours } from "theme";

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    height: 50px;
    width: 50px;
    margin-right: 50px;
  }
`;

export const Text = styled.p`
  color: ${colours.black};
`;
