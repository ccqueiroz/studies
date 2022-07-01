import { screen } from '@testing-library/react';
import React from 'react';
import { TextComponent } from '.';
import { renderThemeProvider } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('[Component]: <TextComponent />', () => {
  it('Should be render text paragraph', () => {
    renderThemeProvider(
      <TextComponent>Paragráfo do texto aqui.</TextComponent>,
    );
    expect(screen.getByText(/Paragráfo do texto aqui./)).toBeInTheDocument();
  });
  it('Should be render text paragraph with default values', () => {
    renderThemeProvider(
      <TextComponent>Paragráfo do texto aqui.</TextComponent>,
    );
    expect(screen.getByText(/Paragráfo do texto aqui./)).toHaveStyle({
      'font-size': theme.font.sizes.medium,
      'line-height': 'unset',
      'letter-spacing': theme.font.letterSpacing.none,
      'text-indent': '0',
      'text-align': 'start',
      'word-break': 'break-word',
    });
  });
  it('Should be render text paragraph with props values', () => {
    renderThemeProvider(
      <TextComponent
        lineHeight={theme.font.sizes.large}
        letterSpacing={theme.font.letterSpacing.small}
        textIndent={'5rem'}
        textAlign={'center'}
        wordBreak={false}
        textEllipsis={true}
      >
        Paragráfo do texto aqui.
      </TextComponent>,
    );
    expect(screen.getByText(/Paragráfo do texto aqui./)).toHaveStyle({
      'line-height': theme.font.sizes.large,
      'letter-spacing': theme.font.letterSpacing.small,
      'text-indent': '5rem',
      'text-align': 'center',
      'word-break': 'unset',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
    });
  });
  it('Should be created snapshot component', () => {
    const { container } = renderThemeProvider(
      <TextComponent>Paragráfo do texto aqui.</TextComponent>,
    );
    expect(container).toMatchSnapshot();
  });
});
