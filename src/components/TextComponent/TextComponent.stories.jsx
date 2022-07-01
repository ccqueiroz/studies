import React from 'react';
import { TextComponent } from '.';
import { theme } from '../../styles/theme';
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Quidem eum modi vitae dolorum iure perferendis, aspernatur aperiam
    error officia at corporis officiis ipsum repudiandae, debitis odit quas a sequi fugiat.`,
    letterSpacing: theme.font.letterSpacing.medium,
    lineHeight: theme.font.sizes.large,
    textIndent: '3rem',
    textAlign: 'start',
    workBreak: true,
    textEllipsis: true,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
