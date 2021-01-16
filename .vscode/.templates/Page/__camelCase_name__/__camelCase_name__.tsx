import React  from "react";
import { withTranslation } from "i18n";
import { Page } from 'templates';
import { {{ pascalCase name }}Container } from "./{{ camelCase name }}.styled";
import { IPage } from '../types';

const {{ pascalCase name }} = ({ t }: IPage) => {
  return (
    <Page
      title="{{ pascalCase name }}"
    >
      <{{ pascalCase name }}Container>
          Hello World
      </{{ pascalCase name }}Container>
    </Page>
  )
}

export default withTranslation()({{ pascalCase name }});