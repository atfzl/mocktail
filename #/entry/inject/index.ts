console.info('inject script');

import { NetworkRequest, NetworkResponse } from '#/interfaces';
import { postMessage } from '#/utils/message';
import { xhook } from 'xhook';

async function main() {
  xhook.enable();

  console.info('before activating before');

  xhook.before((request: NetworkRequest) => {
    if (request instanceof Request) {
      return;
    }

    const { url, method, body, headers } = request;

    const safeRequestHeaders = JSON.parse(JSON.stringify(headers));

    postMessage({
      evt: 'before',
      body: { request: { url, method, body, headers: safeRequestHeaders } },
    });
  });

  xhook.after((request: NetworkRequest, response: NetworkResponse) => {
    const { url, method, body, headers: requestHeaders } = request;

    if (response instanceof Response) {
      return;
    }

    const { status, headers: responseHeaders, data, finalUrl } = response;

    const safeRequestHeaders = JSON.parse(JSON.stringify(requestHeaders));
    const safeResponseHeaders = JSON.parse(JSON.stringify(responseHeaders));

    postMessage({
      evt: 'after',
      body: {
        request: { url, method, body, headers: safeRequestHeaders },
        response: { status, headers: safeResponseHeaders, data, finalUrl },
      },
    });
  });
}

main().catch(e => {
  console.error('mocktail error: ', e);
});
