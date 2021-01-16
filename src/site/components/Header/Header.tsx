import React, { FC } from "react";
import Link from "next/link";
import {
  HeaderOuterContainer,
  HeaderContainer,
  SingleMenu,
  SingleMenuIcon,
  Logo,
  SingleMenuContainer,
} from "./Header.styled";
import { icons } from "assets";

interface IMenu {
  link: string;
  text?: string;
  SVG?: FC;
}

export interface IHeader {
  menu: IMenu[];
}

export const Header = ({ menu }: IHeader) => {
  const menuComponent = menu.map(singleMenu =>
    singleMenu.text ? (
      <SingleMenuContainer key={singleMenu.link}>
        <Link href={singleMenu.link} key={singleMenu.link}>
          <SingleMenu key={singleMenu.link}>{singleMenu.text}</SingleMenu>
        </Link>
      </SingleMenuContainer>
    ) : (
      <SingleMenuContainer key={singleMenu.link}>
        <Link href={singleMenu.link} key={singleMenu.link}>
          <SingleMenuIcon>
            <singleMenu.SVG />
          </SingleMenuIcon>
        </Link>
      </SingleMenuContainer>
    )
  );

  return (
    <HeaderOuterContainer>
      <HeaderContainer>
        <Logo>
          <Link href="/">
            <icons.headerLogo />
          </Link>
        </Logo>
        {menuComponent}
      </HeaderContainer>
    </HeaderOuterContainer>
  );
};
