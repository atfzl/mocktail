console.info('content script');

import { receiveMessage } from '#/utils/message';
import { injectScript } from '#/utils/script';

const port = chrome.runtime.connect({ name: 'atfzl-content' });

port.onMessage.addListener(console.info);

receiveMessage(async message => {
  console.info('message from inject = ', message);

  port.postMessage(message);
});

injectScript('inject.bundle.js');

chrome.runtime.onMessage.addListener(console.info);
