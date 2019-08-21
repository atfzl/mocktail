import '#/entry/background/hotReload';

chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'atfzl-content') {
    port.onMessage.addListener(console.info);

    port.postMessage('for content from bg');
  } else if (port.name === 'atfzl-panel') {
    port.onMessage.addListener(console.info);

    port.postMessage('for panel from bg');
  }
});
