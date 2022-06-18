import { screen } from '@testing-library/react';
import { renderThemeProvider } from '../../styles/render-theme';
import Home from '.';

describe('[Component]: <Home />', () => {
  it('should be render Home correctly', () => {
    renderThemeProvider(<Home />);
    const headingContainer = screen.getByRole('heading', {
      name: /Hello World!/i,
    }).parentElement; //parentElement busca o pai do container
    expect(headingContainer).toHaveStyle({
      background: 'red',
    });
  });
  it('should be render snapshot Home', () => {
    renderThemeProvider(<Home />);
    const headingContainer = screen.getByRole('heading', {
      name: /Hello World!/i,
    }).parentElement; //parentElement busca o pai do container
    expect(headingContainer).toMatchSnapshot();
  });
});
