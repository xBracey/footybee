import styled from "styled-components";
import { colours } from "theme";

interface IFooterMenu {
  alignment: string;
}

export const FooterContainer = styled.div`
  background-color: ${colours.yellow200};
  padding: 16px;
  display: flex;
  align-items: center;
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

  &:hover {
    background-color: ${colours.yellow300};
  }

  &:active {
    background-color: ${colours.black};
    color: ${colours.yellow300};
  }
`;
