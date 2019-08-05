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
      let url: string;
      let method: XHRRequest['method'];
      let body: any;
      let headers: any;

      if (request instanceof Request || request.url instanceof Request) {
        const req = (request.url instanceof Request
          ? request.url
          : request) as Request;

        console.info('fetch', req);

        const headerObj: Record<string, string> = {};
        req.headers.forEach((value, key) => {
          headerObj[key] = value;
        });

        url = req.url;
        method = req.method;
        body = req.body;
        headers = headerObj;
      } else {
        const req = request as XHRRequest<any>;

        console.info('xhr', req);

        url = req.url;
        method = req.method;
        body = req.body;
        headers = req.headers;
      }

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
