import React, { FC } from "react";
import Link from "next/link";
import {
  HeaderContainer,
  SingleMenu,
  SingleMenuIcon,
  Logo,
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
      <SingleMenu key={singleMenu.link}>
        <Link href={singleMenu.link}>{singleMenu.text}</Link>
      </SingleMenu>
    ) : (
      <SingleMenuIcon key={singleMenu.link}>
        <Link href={singleMenu.link}>
          <singleMenu.SVG />
        </Link>
      </SingleMenuIcon>
    )
  );

  return (
    <HeaderContainer>
      <Logo>
        <Link href="/">
          <icons.headerLogo />
        </Link>
      </Logo>
      {menuComponent}
    </HeaderContainer>
  );
};
