import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import { GlobalStyle } from './design-system/globalStyles.ts';
import { theme } from './design-system/theme.ts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);