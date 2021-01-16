import styled from "styled-components";
import { colours, fonts } from "theme";

export const HeaderOuterContainer = styled.div`
  background-color: ${colours.blue200};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  height: 98px;
  max-width: calc(1000px - 32px);
  width: calc(100% - 32px);
`;

export const SingleMenu = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 16px 8px;

  a {
    color: ${colours.white};
    text-decoration: none;
    font-size: ${fonts.size.large};
  }

  &:hover {
    background-color: ${colours.blue100};
  }

  &:active {
    background-color: ${colours.white};

    a {
      color: ${colours.blue200};
    }
  }
`;

export const SingleMenuIcon = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: ${colours.white};
  }

  &:hover {
    background-color: ${colours.blue100};
  }

  &:active {
    background-color: ${colours.white};

    path {
      fill: ${colours.blue200};
    }
  }
`;

export const Logo = styled.div`
  height: 80px;
  width: 80px;
  cursor: pointer;
  margin: 0 256px 0 0;

  path {
    fill: ${colours.white};
  }
`;
