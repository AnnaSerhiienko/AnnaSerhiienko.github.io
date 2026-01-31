import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: ${({ theme }) => theme.typography.fonts.sans};
    color: ${({ theme }) => theme.colors.slate[900]};
    background: ${({ theme }) => theme.colors.white};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.brand.purple};
    color: ${({ theme }) => theme.colors.white};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.slate[50]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.slate[300]};
    border-radius: ${({ theme }) => theme.radii.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.brand.purple};
  }
`;
