import { PANEL_PORT } from '#/constants';
import { createRoot } from 'solid-js';

createRoot(() => {
  document.getElementById('app')!.appendChild(<div>Hello World</div> as any);
});

const port = chrome.runtime.connect({ name: PANEL_PORT });

port.onMessage.addListener(console.info);
port.postMessage('for bg from panel');
