import React from "react";
import Link from "next/link";
import {
  FooterOuterContainer,
  FooterContainer,
  FooterMenu,
  SingleFooterMenu,
} from "./Footer.styled";

interface IFooterMenu {
  link: string;
  text: string;
}

export interface IFooter {
  footerMenuLeft: IFooterMenu[];
  footerMenuRight: IFooterMenu[];
}

export const Footer = ({ footerMenuLeft, footerMenuRight }: IFooter) => {
  const mapFooterMenu = (singleMenu: IFooterMenu) => (
    <div key={singleMenu.link}>
      <Link href={singleMenu.link}>
        <SingleFooterMenu>{singleMenu.text}</SingleFooterMenu>
      </Link>
    </div>
  );

  return (
    <FooterOuterContainer>
      <FooterContainer>
        <FooterMenu alignment="flex-start">
          {footerMenuLeft.map(mapFooterMenu)}
        </FooterMenu>
        <FooterMenu alignment="flex-end">
          {footerMenuRight.map(mapFooterMenu)}
        </FooterMenu>
      </FooterContainer>
    </FooterOuterContainer>
  );
};
