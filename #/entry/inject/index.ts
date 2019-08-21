console.info('inject script');

import { NetworkRequest } from '#/interfaces';
import { postMessage } from '#/utils/message';
import { xhook } from 'xhook';

xhook.enable();

xhook.before((request: NetworkRequest) => {
  postMessage({
    evt: 'before',
    body: request.url,
  });
});
