import styled from "styled-components";
import { COLORS, Container } from "../../lib/constants";

interface ISearchContainer {
  focused: boolean;
}

export const SearchOuterContainer = styled.div`
  flex: 1;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${props => (props.focused ? "calc(100% - 100px)" : "250px")};
  height: 50px;
  background-color: ${COLORS.WHITE};
  border-radius: 20px;
  margin: 0 50px;
  transition: 0.5s;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px;
`;

export const SearchInput = styled.input`
  width: 190px;
  height: calc(100% - 10px);
  border: none;
  font-size: 16px;
`;
