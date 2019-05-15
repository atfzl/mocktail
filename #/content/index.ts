// tslint:disable-next-line:no-console
console.log('content');

function main() {
  chrome.runtime.sendMessage({ greeting: 'hello' }, response => {
    console.log('response=', response);
  });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(
      sender.tab
        ? 'from a content script:' + sender.tab.url
        : 'from the extension',
    );
    console.log(request);
    if (request.action === 'open_dialog_box') {
      sendResponse({ farewell: 'goodbye from content script' });
    } else {
      sendResponse('foobar');
    }
  });
}

window.onload = main;
