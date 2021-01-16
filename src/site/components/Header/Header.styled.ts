import styled from "styled-components";
import { colours } from "theme";

export const HeaderContainer = styled.div`
  background-color: ${colours.blue200};
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const SingleMenu = styled.div`
  color: ${colours.white};
  flex: 1;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 16px 8px;

  &:hover {
    background-color: ${colours.blue100};
  }

  &:active {
    background-color: ${colours.white};
    color: ${colours.blue200};
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
  height: 60px;
  width: 60px;
  cursor: pointer;
  margin: 0 16px 0 0;
  padding: 8px;

  path {
    fill: ${colours.white};
  }
`;
