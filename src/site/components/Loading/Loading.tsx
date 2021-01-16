import { icons } from "assets";
import React from "react";
import {
  LoadingContainer,
  LoadingIcon,
  LoadingText,
  LoadingDots,
} from "./Loading.styled";

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIcon>
        <icons.football />
      </LoadingIcon>
      <LoadingText>
        Loading <LoadingDots>...</LoadingDots>
      </LoadingText>
    </LoadingContainer>
  );
};
