import React from 'react';
import './styles/fonts/index.css';
import ReactDOM from 'react-dom/client';
import Home from './templates/App/index.jsx';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
