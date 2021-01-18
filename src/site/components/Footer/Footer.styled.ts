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

  a {
    text-decoration: none;
  }
`;

export const SingleFooterMenu = styled.div`
  color: ${colours.black};
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 6px 12px;
  margin: 0 4px;
  color: ${colours.black};

  &:hover {
    background-color: ${colours.yellow300};
  }

  &:active {
    background-color: ${colours.black};

    color: ${colours.yellow300};
  }
`;
