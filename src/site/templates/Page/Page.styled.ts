import styled from "styled-components";
import { colours } from "theme";

interface IPageOuterContainer {
  backgroundColour: string;
}

export const PageOuterContainer = styled.div<IPageOuterContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColour};
`;

export const PageInnerContainer = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  max-width: calc(1000px - 32px);
  min-height: calc(100vh - 200px - 32px);
`;
