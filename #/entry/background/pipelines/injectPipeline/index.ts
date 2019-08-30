import { PANEL_PORT } from '#/constants';
import initXHook from '#/entry/background/services/initXHook';

let panelPort: chrome.runtime.Port | undefined;

chrome.runtime.onConnect.addListener(port => {
  if (port.name === PANEL_PORT) {
    console.log(port);

    panelPort = port;
    panelPort.onDisconnect.addListener(() => {
      panelPort = undefined;
    });
  }
});

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
    case 'before': {
      if (panelPort) {
        panelPort.postMessage(message);
      }
      return;
    }
    default: {
      return;
    }
  }
};

export default injectPipeline;
