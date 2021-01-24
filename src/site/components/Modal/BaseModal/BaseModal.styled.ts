import styled from "styled-components";
import { colours } from "theme";

export const BaseModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const BaseModalInnerContainer = styled.div`
  min-height: 100px;
  min-width: 250px;
  border-radius: 6px;
  background-color: ${colours.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 16px;
  border: 4px solid ${colours.grey300};
  display: flex;
  flex-direction: column;
  z-index: 101;
`;
