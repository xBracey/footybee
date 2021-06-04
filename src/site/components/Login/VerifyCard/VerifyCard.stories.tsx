import React from 'react';
import { VerifyCard } from "./VerifyCard";
import { storiesOf } from '@storybook/react';

const story = storiesOf('Components/VerifyCard', module);

story.add(
    'VerifyCard Component',
    () => <VerifyCard />
);
