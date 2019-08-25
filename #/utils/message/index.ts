import * as nanoid from 'nanoid';

const SOURCE = 'xhook-atfzl-message';

export const postMessage = <T extends object>(payload: T) => {
  const id = nanoid();

  return new Promise(resolve => {
    const eventListener = (event: MessageEvent) => {
      if (
        !event.data ||
        event.data.id !== id ||
        event.data.source !== SOURCE ||
        event.data.type !== 'response'
      ) {
        return;
      }

      resolve(event.data.response);
      window.removeEventListener('message', eventListener);
    };

    window.addEventListener('message', eventListener);
    window.postMessage({ id, payload, source: SOURCE, type: 'request' }, '*');
  });
};

export const receiveMessage = <M = any, T = any>(
  cb: (payload: M) => Promise<T>,
) => {
  const eventListener = (event: MessageEvent) => {
    if (
      !event.data ||
      event.data.source !== SOURCE ||
      event.data.type !== 'request'
    ) {
      return;
    }

    cb(event.data.payload).then(response => {
      window.postMessage(
        { id: event.data.id, response, source: SOURCE, type: 'response' },
        '*',
      );
    });
  };

  window.addEventListener('message', eventListener);

  return () => window.removeEventListener('message', eventListener);
};
