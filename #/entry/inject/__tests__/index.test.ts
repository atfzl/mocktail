import 'isomorphic-fetch';
import '..';

const globalAny = global as any;

describe('Inject Script', () => {
  const xhr = new XMLHttpRequest();
  let postMessage: jest.Mock<any, any>;

  beforeEach(() => {
    postMessage = globalAny.postMessage = jest.fn();
  });

  test('XMLHTTPRequests: postMessage called twice', done => {
    xhr.open('GET', globalAny.getUrl('/json'));
    xhr.send();
    xhr.onload = () => {
      expect(postMessage).toBeCalledTimes(2);
      done();
    };

    xhr.onerror = err => {
      console.error(err);
    };
  });

  test('Fetch: postMessage called twice', done => {
    fetch(globalAny.getUrl('/json')).then(() => {
      expect(postMessage).toBeCalledTimes(2);
      done();
    });
  });
});
