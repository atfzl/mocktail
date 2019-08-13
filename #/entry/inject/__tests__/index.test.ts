import 'isomorphic-fetch';
import '..';

import nanoid = require('nanoid');

const env = process.env;

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
    postMessage = (global as any).postMessage = jest.fn();
  });

  test('XMLHTTPRequests: postMessage called twice', done => {
    makeXHR('GET', env.apiUrl + '/json', true)
      .then(() => {
        expect(postMessage).toBeCalledTimes(2);
        done();
      })
      .catch(console.error);
  });

  test('Fetch: postMessage called twice', done => {
    fetch(env.apiUrl + '/json')
      .then(() => {
        expect(postMessage).toBeCalledTimes(2);
        done();
      })
      .catch(console.error);
  });

  test('XMLHTTPRequests: Hook snapshot', done => {
    makeXHR('GET', env.apiUrl + '/json', true)
      .then(() => {
        expect(postMessage.mock.calls[0]).toMatchSnapshot();
        expect(postMessage.mock.calls[1]).toMatchSnapshot();
        done();
      })
      .catch(console.error);
  });

  test('Fetch: Hook snapshot', done => {
    fetch(env.apiUrl + '/json', { cache: 'no-cache' })
      .then(() => {
        expect(postMessage.mock.calls[0]).toMatchSnapshot();
        expect(postMessage.mock.calls[1]).toMatchSnapshot();
        done();
      })
      .catch(console.error);
  });
});
