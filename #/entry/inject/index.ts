console.info('inject script');

import { NetworkRequest } from '#/interfaces';
import { postMessage, receiveMessage } from '#/utils/message';
import * as xhook from 'xhook';

xhook.before((request: NetworkRequest) => {
  postMessage({
    from: 'inject',
    type: 'before',
    payload: request.url,
  });
});

postMessage({ type: 'init', from: 'inject' });

receiveMessage(async message => {
  if (message.from === 'inject') {
    return;
  }

  switch (message.type) {
    case 'enable-xhook': {
      if (message.payload.enable) {
        xhook.enable();
      } else {
        xhook.disable();
      }
      return;
    }
  }
});
