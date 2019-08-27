import { PANEL_PORT } from '#/constants';

console.info('panel');

document.querySelector('#app')!.textContent = 'panel';

const port = chrome.runtime.connect({ name: PANEL_PORT });

port.onMessage.addListener(console.info);
port.postMessage('for bg from panel');
