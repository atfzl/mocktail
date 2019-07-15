import * as styledComponents from 'styled-components';
import theme, { IThemeInterface } from './theme';

const {
  default: styled,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

const GlobalCss = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

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

export { theme, GlobalCss, ThemeProvider };
export default styled;
