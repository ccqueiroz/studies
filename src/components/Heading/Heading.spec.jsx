import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderThemeProvider } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('[Component]: <Heading />', () => {
  it('Should be render with default values', () => {
    renderThemeProvider(<Heading>Texto de Teste</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'Texto de Teste',
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('Should be render with white color', () => {
    renderThemeProvider(<Heading colorDark={false}>Texto de Teste</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'Texto de Teste',
    });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('Should be render correctly heading small sizes', () => {
    renderThemeProvider(<Heading size="small">Texto de Teste</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'Texto de Teste',
    });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('Should be render correctly heading medium sizes', () => {
    renderThemeProvider(<Heading size="medium">Texto de Teste</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'Texto de Teste',
    });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });

  it('Should be render correctly heading big sizes', () => {
    renderThemeProvider(<Heading size="big">Texto de Teste</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'Texto de Teste',
    });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });

  it('Should be render correctly uppercase letters', () => {
    renderThemeProvider(<Heading uppercase>Texto de Teste</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'Texto de Teste',
    });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('Should be render correctly font-size when screen less then 768px', () => {
    renderThemeProvider(<Heading>Texto de Teste</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'Texto de Teste',
    });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.ltMedium,
    });
  });

  it('Should be render correctly heading element', () => {
    const { container } = renderThemeProvider(
      <Heading as="h6">Texto de Teste</Heading>,
    );

    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('Should be created snapshot component', () => {
    const { container } = renderThemeProvider(
      <Heading>Texto de Teste</Heading>,
    );

    expect(container).toMatchSnapshot();
  });
});
