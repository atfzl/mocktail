import { PANEL_PORT } from '#/constants';
import { injectGlobal } from 'emotion';

console.info('panel');

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

document.querySelector('#app')!.textContent = 'panel';

const port = chrome.runtime.connect({ name: PANEL_PORT });

port.onMessage.addListener(console.info);
port.postMessage('for bg from panel');
