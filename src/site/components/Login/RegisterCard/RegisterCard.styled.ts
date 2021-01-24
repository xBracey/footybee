import { TextInputOuterContainer } from "components/Input/TextInput/TextInput.styled";
import styled from "styled-components";

export const TwoInputContainer = styled.div`
  display: flex;

  ${TextInputOuterContainer}:nth-child(2n+1) {
    flex: 1;
    margin-right: 6px;
  }

  ${TextInputOuterContainer}:nth-child(2n) {
    flex: 1;
    margin-left: 6px;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
`;
