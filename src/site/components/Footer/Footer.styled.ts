import styled from "styled-components";
import { colours } from "theme";

interface IFooterMenu {
  alignment: string;
}

export const FooterOuterContainer = styled.div`
  background-color: ${colours.yellow200};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  height: 38px;
  max-width: calc(1000px - 32px);
  width: calc(100% - 32px);
`;

export const FooterMenu = styled.div<IFooterMenu>`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: ${props => props.alignment};
`;

export const SingleFooterMenu = styled.div`
  color: ${colours.black};
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 6px 12px;
  margin: 0 4px;

  a {
    color: ${colours.black};
    text-decoration: none;
  }

  &:hover {
    background-color: ${colours.yellow300};
  }

  &:active {
    background-color: ${colours.black};

    a {
      color: ${colours.yellow300};
    }
  }
`;
