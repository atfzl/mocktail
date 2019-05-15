// tslint:disable-next-line:no-console
console.log('panel');

chrome.runtime.sendMessage({ greeting: 'hello from panel' }, response => {
  console.log('response=', response);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // tslint:disable-next-line:no-console
  console.log(request);

  sendResponse('foobar');
});
