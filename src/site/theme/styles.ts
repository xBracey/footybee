import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";

export const GlobalStyles = createGlobalStyle`
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
