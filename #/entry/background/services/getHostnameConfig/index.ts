interface ReturnType {
  enabled: boolean;
}

const getHostNameConfig = (tab: chrome.tabs.Tab): Promise<ReturnType> => {
  const url = new URL(tab.url!);

  return new Promise(resolve => {
    chrome.storage.sync.get([url.hostname], result => {
      const hostnameValue = result[url.hostname] || {
        enabled: false,
      };

      resolve(hostnameValue);
    });
  });
};

export default getHostNameConfig;
