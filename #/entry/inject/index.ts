console.log('inject');

import { NetworkRequest, NetworkResponse } from '#/interfaces';
import { xhook } from 'xhook';

const src = 'xhook-atfzl';

xhook.enable();
window.postMessage({ src, evt: 'enable' }, '*');

console.log('before activating before');

xhook.before((request: Request) => {
  {
    const { url, method, body, headers } = request;

    window.postMessage(
      { src, evt: 'before', body: { request: { url, method, body, headers } } },
      '*',
    );
  }
});

xhook.after((request: NetworkRequest, response: NetworkResponse) => {
  {
    const { url, method, body, headers } = request;
    const { status, headers: responseHeaders, data, finalUrl } = response;

    window.postMessage(
      {
        src,
        evt: 'after',
        body: {
          request: { url, method, body, headers },
          response: { status, headers: responseHeaders, data, finalUrl },
        },
      },
      '*',
    );
  }
});
