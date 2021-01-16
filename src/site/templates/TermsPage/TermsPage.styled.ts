import styled from "styled-components";
import { colours, fonts } from "theme";

export const TermsPageContainer = styled.div`
  color: ${colours.white};
  padding: 16px 0 64px 0;

  h1 {
    text-align: center;
  }

  a,
  h1,
  h2,
  h3,
  p,
  li {
    color: ${colours.white};
    font-family: ${fonts.family.roboto};
  }
`;
