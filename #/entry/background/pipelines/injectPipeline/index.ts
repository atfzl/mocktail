import initXHook from '#/entry/background/services/initXHook';

const injectPipeline: (
  message: { type: string; payload: any },
  port: chrome.runtime.Port,
) => void = (message, port) => {
  console.info('message recieved from inject: ', message);
  switch (message.type) {
    case 'init': {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        const tab = tabs[0];

        if (tab && tab.id) {
          initXHook(tab).then(enable => {
            port.postMessage({ type: 'enable-xhook', payload: { enable } });
          });
        }
      });
    }
    default: {
      return;
    }
  }
};

export default injectPipeline;
