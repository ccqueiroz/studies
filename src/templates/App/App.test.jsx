import { renderThemeProvider } from '../../styles/render-theme';
import Home from '.';

describe('[Component]: <Home />', () => {
  it('should be render Home correctly', () => {
    renderThemeProvider(<Home />);
  });
});
