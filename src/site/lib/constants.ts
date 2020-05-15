import styled, { createGlobalStyle, css } from "styled-components";

export const COLORS = {
  BLUE: "#2A7886",
  LIGHT_GREY: "#F1F3F4",
  DARK_GREY: "#DDDDDD",
  DISABLED: "#B0B4B6",
  WHITE: "#FFFFFF",
  LIGHT_BLUE: "#79BAC1",
  DARK_BLUE: "#084651",
};

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0px;
        padding: 0px;
    }

    h1,h2,h3,p,a {
        font-family: Roboto;
    }

    h1 {
        font-size: 36px;
        margin: 10px 0px;
    }

    h2 {
        font-size: 24px;
    }

    h3 {
        font-size: 18px;
        margin: 10px 0px;
    }

    p {
        font-size: 16px;
        margin: 15px 0px;
    }
`;

export const Background = styled.div`
  background-color: ${COLORS.LIGHT_GREY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  width: calc(100% - 50px);
  max-width: 1500px;
  padding: 0px 25px;
`;

export const MainFilterContainer = styled.div`
  display: flex;
`;

export const mobileMixin = rules => css`
  @media (max-width: 900px) {
    ${rules}
  }
`;
