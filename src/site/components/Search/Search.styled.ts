import styled from "styled-components";
import { COLORS, Container } from "../../lib/constants";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 50px;
  background-color: ${COLORS.WHITE};
  border-radius: 20px;
  margin: 0 50px;
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
