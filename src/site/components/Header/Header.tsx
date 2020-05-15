import React from "react";
import { HeaderContainer, Title } from "./Header.styled";
import { Search, FilterToggle } from "..";
import ICVE from "../../../api/models/cve/type";

interface IHeaderProps {
  setSearchResults: (searchResults: ICVE[]) => void;
  setFilter: (filter: boolean) => void;
  filter: boolean;
}

const Header = ({ setSearchResults, setFilter, filter }: IHeaderProps) => (
  <HeaderContainer>
    <Title>CVE Analysis</Title>
    <Search setSearchResults={setSearchResults} />
    <FilterToggle setFilter={setFilter} filter={filter} />
  </HeaderContainer>
);

export default Header;
