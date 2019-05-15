import './hotReload';
// tslint:disable-next-line:no-console
console.log('background');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (sender.tab) {
    chrome.runtime.sendMessage(request, sendResponse);
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs[0] && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, request, sendResponse);
      }
    });
  }
});
