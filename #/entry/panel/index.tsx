// tslint:disable-next-line:no-console
console.log('panel');

import App from '#/entry/panel/app';
import { GlobalCss, theme, ThemeProvider } from '#/styled';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import './mdc.styles';

const store = new Store();

store.ready().then(() => {
  const appNode = document.getElementById('app');

  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalCss />
          <App />
        </>
      </ThemeProvider>
    </Provider>,
    appNode,
  );
});
