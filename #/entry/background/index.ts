import '#/entry/background/hotReload';

let mocktailActive = true;

function toggleEnable(enable: boolean) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, { enable });
    }
  });
}

chrome.browserAction.onClicked.addListener(tab => {
  if (mocktailActive) {
    chrome.browserAction.setIcon({
      path: 'disabled-icon48.png',
      tabId: tab.id,
    });
    mocktailActive = false;
  } else {
    chrome.browserAction.setIcon({
      path: 'icon48.png',
      tabId: tab.id,
    });
    mocktailActive = true;
  }
  toggleEnable(mocktailActive);
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
