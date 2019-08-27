import { CONTENT_PORT } from '#/constants';
import { postMessage, receiveMessage } from '#/utils/message';
import { injectScript } from '#/utils/script';

const port = chrome.runtime.connect({ name: CONTENT_PORT });

receiveMessage(async message => {
  if (message.from === 'inject') {
    port.postMessage(message);
  }
});
port.onMessage.addListener(message => {
  postMessage(message);
});

injectScript('inject.bundle.js');
