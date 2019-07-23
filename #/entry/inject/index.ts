console.info('inject script');

import {
  MockedNetworkResponse,
  NetworkRequest,
  NetworkResponse,
  XHRRequest,
} from '#/interfaces';
import { postMessage } from '#/utils/message';
import { xhook } from 'xhook';

async function main() {
  xhook.enable();

  console.info('before activating before');

  xhook.before(
    (
      request: NetworkRequest,
      responder: (mockedNetworkResponse?: MockedNetworkResponse) => void,
    ) => {
      if (request instanceof Request) {
        responder();
        return;
      }

      if (request.url instanceof Request) {
        responder();
        return;
      }

      const { url, method, body, headers } = request as XHRRequest<any>;

      postMessage({
        evt: 'before',
        body: { request: { url, method, body, headers } },
      });

      responder();
    },
  );

  xhook.after((request: NetworkRequest, response: NetworkResponse) => {
    if (request instanceof Request) {
      return;
    }

    if (request.url instanceof Request) {
      return;
    }

    const {
      url,
      method,
      body,
      headers: requestHeaders,
    } = request as XHRRequest<any>;

    if (response instanceof Response) {
      return;
    }

    const { status, headers: responseHeaders, data, finalUrl } = response;

    postMessage({
      evt: 'after',
      body: {
        request: { url, method, body, headers: requestHeaders },
        response: { status, headers: responseHeaders, data, finalUrl },
      },
    });
  });
}

try {
  main();
} catch (e) {
  console.error('mocktail error: ', e);
}
