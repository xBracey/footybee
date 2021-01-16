import React from 'react';
import { Loading } from "./Loading";
import { storiesOf } from '@storybook/react';

const story = storiesOf('Components/Loading', module);

story.add(
    'Loading Component',
    () => <Loading />
);
