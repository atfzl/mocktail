import getHostNameConfig from '../getHostnameConfig';

const initXHook = async (tab: chrome.tabs.Tab) => {
  const url = new URL(tab.url!);

  const hostnameConfig = await getHostNameConfig(tab);

  const enable = hostnameConfig.enabled;

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

  return enable;
};

export default initXHook;
