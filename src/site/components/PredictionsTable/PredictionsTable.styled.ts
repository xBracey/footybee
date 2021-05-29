import styled from "styled-components";
import { colours, fonts } from "theme";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PairingNote = styled.div`
  background-color: ${colours.white};
  flex: 1;
  border-radius: 6px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 16px 32px;
  margin: 24px;
  color: ${colours.blue300};
  font-size: ${fonts.size.small};
`;
