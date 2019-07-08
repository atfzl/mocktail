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

    const safeRequestHeaders = JSON.parse(JSON.stringify(headers));

    window.postMessage(
      {
        src,
        evt: 'before',
        body: { request: { url, method, body, headers: safeRequestHeaders } },
      },
      '*',
    );
  }
});

xhook.after((request: NetworkRequest, response: NetworkResponse) => {
  {
    const { url, method, body, headers: requestHeaders } = request;
    const { status, headers: responseHeaders, data, finalUrl } = response;

    const safeRequestHeaders = JSON.parse(JSON.stringify(requestHeaders));
    const safeResponseHeaders = JSON.parse(JSON.stringify(responseHeaders));

    window.postMessage(
      {
        src,
        evt: 'after',
        body: {
          request: { url, method, body, headers: safeRequestHeaders },
          response: { status, headers: safeResponseHeaders, data, finalUrl },
        },
      },
      '*',
    );
  }
});
