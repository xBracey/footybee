import React from 'react';
import { Toggle } from "./Toggle";
import { storiesOf } from '@storybook/react';

const story = storiesOf('Components/Toggle', module);

story.add(
    'Toggle Component',
    () => <Toggle />
);
