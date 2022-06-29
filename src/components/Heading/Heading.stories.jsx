import React from 'react';
import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está assim',
    colorDark: true,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está assim',
  colorDark: false,
};
