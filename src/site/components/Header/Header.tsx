import React, { FC, useState } from "react";
import Link from "next/link";
import {
  HeaderOuterContainer,
  HeaderContainer,
  SingleMenu,
  SingleMenuIcon,
  Logo,
  SingleMenuContainer,
  HeaderDesktopMenu,
  HeaderMobileMenu,
  HeaderMenuContainer,
  MenuContainer,
} from "./Header.styled";
import { icons } from "assets";
import ScrollLock from "react-scrolllock";

interface IMenu {
  link: string;
  text?: string;
  SVG?: FC;
}

export interface IHeader {
  menu: IMenu[];
}

export const Header = ({ menu }: IHeader) => {
  const [open, setOpen] = useState(false);

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

  const mobileMenuComponent = open ? (
    <>
      <ScrollLock />
      <HeaderMobileMenu>{menuComponent}</HeaderMobileMenu>
    </>
  ) : null;

  const onMenuClick = () => {
    window.scrollTo(0, 0);
    setOpen(!open);
  };

  return (
    <HeaderOuterContainer>
      <HeaderContainer>
        <Logo>
          <Link href="/">
            <icons.headerLogo />
          </Link>
        </Logo>
        {mobileMenuComponent}
        <HeaderMenuContainer>
          <MenuContainer onClick={onMenuClick}>
            {open ? <icons.close /> : <icons.menu />}
          </MenuContainer>
        </HeaderMenuContainer>
        <HeaderDesktopMenu>{menuComponent}</HeaderDesktopMenu>
      </HeaderContainer>
    </HeaderOuterContainer>
  );
};
