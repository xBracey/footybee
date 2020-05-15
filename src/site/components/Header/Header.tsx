import React from "react";
import { HeaderContainer, Title } from "./Header.styled";
import { Search } from "..";

const Header = () => (
  <HeaderContainer>
    <Title>CVE Analysis</Title>
    <Search />
  </HeaderContainer>
);

export default Header;
