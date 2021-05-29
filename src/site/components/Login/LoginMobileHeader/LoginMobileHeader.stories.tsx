import React from 'react';
import { LoginMobileHeader } from "./LoginMobileHeader";
import { storiesOf } from '@storybook/react';

const story = storiesOf('Components/LoginMobileHeader', module);

story.add(
    'LoginMobileHeader Component',
    () => <LoginMobileHeader />
);
