import { createGlobalStyle } from 'styled-components';

export const theme = {
  bg: '#180625',
  highlight: '#F9F871',
  dark: '#111222',
  um_small: '1rem',
  um_medium: '3rem',
  um_large: '5rem',
  wg_bold: '900',
  wg_normal: '500',
};

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 112.5%
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${theme.bg};
    font-family: 'Exo 2', Helvetica, Sans-Serif;
    color: #FFFFFF;
    font-weight: ${theme.wg_normal};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.wg_bold};
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: ${theme.um_small}
  }

  h1, h2 {
    font-size: 3.055rem;

    @media (min-width: 1200px) {
      font-size: 3.055rem;
    }
  }
`;
