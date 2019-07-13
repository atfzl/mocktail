import * as styledComponents from 'styled-components';
import theme, { GlobalCss, IThemeInterface } from './theme';

const {
  default: styled,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export { theme, GlobalCss, ThemeProvider };
export default styled;
