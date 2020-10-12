import React, { FC } from "react";
import { IconTextContainer, Text } from "./IconText.styled";

interface IIconText {
  SVG: FC;
  text: string;
}

export const IconText = ({ SVG, text }: IIconText) => {
  return (
    <IconTextContainer>
      <SVG />
      <Text>{text}</Text>
    </IconTextContainer>
  );
};
