import styled, { createGlobalStyle } from "styled-components";
import { colours } from "./colours";
import { fonts } from "./fonts";

interface IStorybookWrapper {
  width?: number;
}

export const GlobalStyles = createGlobalStyle`
    html, body{
        overflow-x: hidden;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1,h2,h3,p,a,div {
        font-family: ${fonts.family.poppins}
    }

    h1 {
        font-size: ${fonts.size.header1};
        margin: 32px 0;
    }

    h2 {
        font-size: ${fonts.size.header2};
        margin: 24px 0;
    }

    h3 {
        font-size: ${fonts.size.header3};
        margin: 16px 0;
    }

    p {
        margin: 8px 0;
    }

    p,a,div {
        font-size: ${fonts.size.medium};
    }
`;

export const StorybookWrapper = styled.div<IStorybookWrapper>`
  background-color: ${colours.grey100};
  padding: 16px;
  width: ${props => props.width ?? 600}px;
  display: flex;
`;
