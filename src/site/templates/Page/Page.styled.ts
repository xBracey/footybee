import styled, { css } from "styled-components";

interface IPageOuterContainer {
  backgroundColour: string;
  usePadding: boolean;
}

export const PageOuterContainer = styled.div<IPageOuterContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColour};
`;

const withPadding = css`
  width: calc(100% - 32px);
  padding: 16px;
  max-width: calc(1000px - 32px);
  min-height: calc(100vh - 200px - 32px + 1px);
`;

const withoutPadding = css`
  width: 100%;
  min-height: calc(100vh - 200px + 1px);
`;

export const PageInnerContainer = styled.div`
  ${props => (props.usePadding ? withPadding : withoutPadding)}
`;
