import 'isomorphic-fetch';
import '..';

import nanoid = require('nanoid');

const globalAny = global as any;

let postMessage: jest.Mock<any, any>;

// mock for nanoid to return same if for all
jest.mock('nanoid');
(nanoid as any).mockImplementation(() => 1);

describe('Inject Script', () => {
  const makeXHR = (...args: Parameters<XMLHttpRequest['open']>) => {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open(...args);
      xhr.send();
      xhr.onload = resolve;
      xhr.onerror = reject;
    });
  };

  beforeEach(() => {
    postMessage = globalAny.postMessage = jest.fn();
  });

  test('XMLHTTPRequests: postMessage called twice', done => {
    makeXHR('GET', globalAny.getUrl('/json'), true)
      .then(() => {
        expect(postMessage).toBeCalledTimes(2);
        done();
      })
      .catch(console.error);
  });

  test('Fetch: postMessage called twice', done => {
    fetch(globalAny.getUrl('/json'))
      .then(() => {
        expect(postMessage).toBeCalledTimes(2);
        done();
      })
      .catch(console.error);
  });

  test('XMLHTTPRequests: Hook snapshot', done => {
    makeXHR('GET', globalAny.getUrl('/json'), true)
      .then(() => {
        expect(postMessage.mock.calls[0]).toMatchSnapshot();
        expect(postMessage.mock.calls[1]).toMatchSnapshot();
        done();
      })
      .catch(console.error);
  });

  test('Fetch: Hook snapshot', done => {
    fetch(globalAny.getUrl('/json'))
      .then(() => {
        expect(postMessage.mock.calls[0]).toMatchSnapshot();
        expect(postMessage.mock.calls[1]).toMatchSnapshot();
        done();
      })
      .catch(console.error);
  });
});
