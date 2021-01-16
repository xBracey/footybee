import React from "react";
import { Page } from "templates";
import { {{ pascalCase name }}PageContainer } from "./{{ pascalCase name }}Page.styled";

export const {{ pascalCase name }}Page = () => {
  return (
    <Page title="{{ pascalCase name }}" isLoggedIn={true}>
      <{{ pascalCase name }}PageContainer>Hello World</{{ pascalCase name }}PageContainer>
    </Page>
  );
};
