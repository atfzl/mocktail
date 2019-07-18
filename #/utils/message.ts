import nanoid = require('nanoid');

const SOURCE = 'xhook-atfzl-message-';

export const postMessage = (() => {
  const id = nanoid();

  return <T extends object>(payload: T) => {
    return new Promise(resolve => {
      const eventListener = (event: MessageEvent) => {
        if (
          event.source === window &&
          event.data.id === id &&
          event.data.source === SOURCE &&
          event.data.type === 'response'
        ) {
          resolve(event.data.response);
          window.removeEventListener('message', eventListener);
        }
      };

      window.addEventListener('message', eventListener);
      window.postMessage({ id, payload, source: SOURCE, type: 'request' }, '*');
    });
  };
})();

export const receiveMessage = <M = any, T = any>(
  cb: (payload: M) => Promise<T>,
) => {
  const eventListener = (event: MessageEvent) => {
    if (
      event.source !== window ||
      !event.data ||
      event.data.source !== SOURCE ||
      event.data.type !== 'request'
    ) {
      return;
    }
    cb(event.data.payload).then(response => {
      if (!response) {
        return;
      }
      window.postMessage(
        { id: event.data.id, response, source: SOURCE, type: 'response' },
        '*',
      );
    });
  };

  window.addEventListener('message', eventListener);
};
