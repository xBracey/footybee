import styled from "styled-components";
import { colours } from "theme";
import { BaseModalInnerContainer } from "../BaseModal/BaseModal.styled";

interface IError {
  error: boolean;
}

export const MessageModalContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 16px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MessageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 32px;
`;

export const MessageModalOuterContainer = styled.span<IError>`
  ${BaseModalInnerContainer} {
    border: 4px solid
      ${props => (props.error ? colours.red200 : colours.successGreen)};
  }
`;
