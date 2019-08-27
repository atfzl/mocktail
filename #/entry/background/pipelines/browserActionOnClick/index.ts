const browserActionOnClickPipeline = (port: chrome.runtime.Port) => (
  tab: chrome.tabs.Tab,
) => {
  const url = new URL(tab.url!);

  chrome.storage.sync.get([url.hostname], result => {
    const value = result[url.hostname] || { enabled: false };

    const enable = !value.enabled;

    if (enable) {
      chrome.browserAction.setIcon({
        path: 'icon48.png',
        tabId: tab.id,
      });
      chrome.storage.sync.set({ [url.hostname]: { enabled: true } });
    } else {
      chrome.browserAction.setIcon({
        path: 'disabled-icon48.png',
        tabId: tab.id,
      });
      chrome.storage.sync.set({ [url.hostname]: { enabled: false } });
    }

    port.postMessage({
      type: 'enable-xhook',
      payload: { enable },
    });
  });
};

export default browserActionOnClickPipeline;
