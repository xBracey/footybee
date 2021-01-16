import styled from "styled-components";
import { fonts } from "theme";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 32px;
`;

export const LoadingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  animation-name: spin;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform: rotate(0deg);

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingText = styled.p`
  margin: -8px 0 0 0;
  font-size: ${fonts.size.large};
`;

export const LoadingDots = styled.span`
  font-size: 48px;
  font-weight: 300;
  font-family: ${fonts.family.roboto};
`;
