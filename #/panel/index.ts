// tslint:disable-next-line:no-console
console.log('panel');

chrome.runtime.sendMessage({ greeting: 'hello from panel' }, response => {
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
    sendResponse({ farewell: 'goodbye from panel' });
  } else {
    sendResponse('foobar');
  }
});
