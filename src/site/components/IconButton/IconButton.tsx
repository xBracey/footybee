import React, { FC, MouseEvent } from "react";
import Link from "next/link";
import {
  IconButtonContainer,
  IconButtonInnerContainer,
} from "./IconButton.styled";

interface IIconButton {
  SVG: FC;
  link?: string;
  onClick?: (event: MouseEvent) => void;
}

export const IconButton = ({ SVG, link, onClick }: IIconButton) => {
  if (link) {
    return (
      <Link href={link}>
        <IconButtonContainer>
          <IconButtonInnerContainer>
            <SVG />
          </IconButtonInnerContainer>
        </IconButtonContainer>
      </Link>
    );
  }

  return (
    <IconButtonContainer onClick={onClick}>
      <IconButtonInnerContainer>
        <SVG />
      </IconButtonInnerContainer>
    </IconButtonContainer>
  );
};
