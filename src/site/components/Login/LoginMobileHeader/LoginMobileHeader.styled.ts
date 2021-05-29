import styled from "styled-components";
import { colours, device, fonts } from "theme";

export const LoginMobileHeaderContainer = styled.div`
  display: none;
  background-color: ${colours.blue300};
  padding: 32px;
  color: ${colours.white};
  align-items: center;

  svg {
    margin: -40px;
    transform: scale(0.5);

    path {
      fill: ${colours.white};
    }
  }

  @media ${device.laptop} {
    display: flex;
  }
`;

export const LoginMobileHeaderText = styled.h1`
  font-size: ${fonts.size.header3};
  font-weight: 500;
  margin: 16px 8px;
  flex: 1;
  text-align: center;
`;
