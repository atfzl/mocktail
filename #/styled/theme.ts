import { createGlobalStyle } from 'styled-components';

const theme = {
  colors: {},
  weights: [400, 500, 700],
  _htmlFontSize: 10,
  baseFontSize: 1.4, // in rem
};

export type IThemeInterface = typeof theme;

export default theme;

export const GlobalCss = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

  html {
    font-size: 14px;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", "Source Sans Pro", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #2d2d2d;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }
`;
