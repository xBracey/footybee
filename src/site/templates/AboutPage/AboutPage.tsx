import { aboutData } from "data";
import React from "react";
import { Page } from "templates";
import { colours } from "theme";
import {
  AboutPageContainer,
  AboutSection,
  AboutContent,
  PhotoContainer,
  AboutPhoto,
  PhotoCaption,
} from "./AboutPage.styled";

export const AboutPage = () => {
  const {
    header,
    introduction,
    howHeader,
    howParagraphs,
    photo,
    photoCaption,
  } = aboutData;

  return (
    <Page
      title="About"
      aboutPages
      isLoggedIn={false}
      backgroundColour={colours.green200}
    >
      <AboutPageContainer>
        <h1>{header}</h1>
        <AboutSection>
          <AboutContent>
            {introduction.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <h2>{howHeader}</h2>

            {howParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </AboutContent>
          <PhotoContainer>
            <AboutPhoto src={photo} alt="Me and James" />
            <PhotoCaption>{photoCaption}</PhotoCaption>
          </PhotoContainer>
        </AboutSection>
      </AboutPageContainer>
    </Page>
  );
};
