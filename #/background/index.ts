import './hotReload';
// tslint:disable-next-line:no-console
console.log('background');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension',
  );
  console.log(request);

  if (sender.tab) {
    chrome.runtime.sendMessage(request, sendResponse);
  }

  sendResponse({});
});

setInterval(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (tabs[0] && tabs[0].id) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'open_dialog_box' },
        console.log,
      );
    }
  });

  console.log('sending message');

  chrome.runtime.sendMessage({ foobar: 'barpo' }, console.log);
}, 3000);
