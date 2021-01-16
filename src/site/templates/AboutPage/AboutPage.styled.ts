import styled from "styled-components";
import { colours, fonts } from "theme";

export const AboutPageContainer = styled.div`
  color: ${colours.white};
  padding: 16px 0 64px 0;

  h1 {
    text-align: center;
  }

  a,
  h1,
  h2,
  h3,
  p,
  li {
    color: ${colours.white};
    font-family: ${fonts.family.roboto};
  }
`;

export const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutContent = styled.div`
  margin-right: 64px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 0px;
  width: 100%;
  flex: 1;
`;

export const AboutPhoto = styled.img`
  width: 333px;
  height: 459px;
  border: 4px solid white;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const PhotoCaption = styled.p``;
