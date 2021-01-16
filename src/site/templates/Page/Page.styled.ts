import styled from "styled-components";
import { colours } from "theme";

export const PageOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageInnerContainer = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  background-color: ${colours.white};
  max-width: calc(1000px - 32px);
  min-height: calc(100vh - 200px - 32px);
`;
