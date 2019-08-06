console.info('inject script');

import {
  MockedNetworkResponse,
  NetworkRequest,
  NetworkResponse,
  NetworkRow,
  XHRRequest,
} from '#/interfaces';
import { postMessage } from '#/utils/message';
import { xhook } from 'xhook';

function getHeaderObj(headers: Headers | Record<string, string>) {
  if (headers instanceof Headers) {
    const headerObj: Record<string, string> = {};

    headers.forEach((value, key) => {
      headerObj[key] = value;
    });

    return headerObj;
  }

  return headers;
}

function generateRequestPayload(
  request: NetworkRequest,
): NetworkRow['request'] {
  if (request instanceof Request || request.url instanceof Request) {
    const req = (request.url instanceof Request
      ? request.url
      : request) as Request;

    console.info('fetch', req);

    return {
      url: req.url,
      method: req.method,
      body: req.body,
      headers: getHeaderObj(req.headers),
    };
  } else {
    const req = request as XHRRequest<any>;

    console.info('xhr', req);

    return {
      url: req.url,
      method: req.method,
      body: req.body,
      headers: req.headers,
    };
  }
}

async function generateResponsePayload(
  response: NetworkResponse,
): Promise<NetworkRow['response']> {
  if (response instanceof Response) {
    const { status, headers, url } = response;

    const data = await response.json();

    return {
      status,
      headers: getHeaderObj(headers),
      finalUrl: url,
      data,
    };
  } else {
    const { status, headers, data, finalUrl } = response;

    return {
      status,
      headers,
      data,
      finalUrl,
    };
  }
}

async function main() {
  xhook.enable();

  console.info('enabling hooks');

  xhook.before(
    (
      request: NetworkRequest,
      responder: (mockedNetworkResponse?: MockedNetworkResponse) => void,
    ) => {
      postMessage({
        evt: 'before',
        body: generateRequestPayload(request),
      });

      responder();
    },
  );

  xhook.after((request: NetworkRequest, response: NetworkResponse, cb: any) => {
    let oldResponse = response;
    if (response instanceof Response) {
      oldResponse = response.clone();
    }

    generateResponsePayload(response).then(responseBody => {
      postMessage({
        evt: 'after',
        body: {
          request: generateRequestPayload(request),
          response: responseBody,
        },
      });
      cb(oldResponse);
    });
  });
}

try {
  main();
} catch (e) {
  console.error('mocktail error: ', e);
}
