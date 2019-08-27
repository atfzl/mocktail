import '#/entry/background/hotReload';

function toggleEnable(enable: boolean) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, { enable });
    }
  });
}

chrome.browserAction.onClicked.addListener(tab => {
  const url = new URL(tab.url!);

  chrome.storage.sync.get([url.hostname], result => {
    const value = result[url.hostname] || { enabled: false };

    if (value.enabled) {
      chrome.browserAction.setIcon({
        path: 'disabled-icon48.png',
        tabId: tab.id,
      });
      chrome.storage.sync.set({ [url.hostname]: { enabled: false } });
    } else {
      chrome.browserAction.setIcon({
        path: 'icon48.png',
        tabId: tab.id,
      });
      chrome.storage.sync.set({ [url.hostname]: { enabled: true } });
    }
    toggleEnable(!value.enabled);
  });
});

chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'atfzl-content') {
    port.onMessage.addListener(console.info);

    port.postMessage('for content from bg');
  } else if (port.name === 'atfzl-panel') {
    port.onMessage.addListener(console.info);

    port.postMessage('for panel from bg');
  }
});
