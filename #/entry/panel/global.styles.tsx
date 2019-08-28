import { injectGlobal } from 'emotion';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;
