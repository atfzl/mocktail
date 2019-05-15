// tslint:disable-next-line:no-console
console.log('content');

const injectScript = (script: string) => {
  const s = document.createElement('script');

  const src = chrome.extension.getURL(script);

  s.src = src;
  s.onload = () => {
    s.remove();
  };

  document.documentElement.appendChild(s);
};

injectScript('inject.bundle.js');

window.addEventListener('message', (event: MessageEvent) => {
  // // We only accept messages from ourselves
  if (event.source !== window) {
    console.log(event.source, window);
    return;
  }

  if (event.data.source && event.data.source === 'atfzl') {
    chrome.runtime.sendMessage(event.data, console.log);
  }
});

function main() {
  // setInterval(() => {
  //   chrome.runtime.sendMessage({ greeting: 'hello' }, response => {
  //     console.log('response=', response);
  //   });
  // }, 3000);
  // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  //   console.log(
  //     sender.tab
  //       ? 'from a content script:' + sender.tab.url
  //       : 'from the extension',
  //   );
  //   console.log(request);
  //   if (request.action === 'open_dialog_box') {
  //     sendResponse({ farewell: 'goodbye from content script' });
  //   } else {
  //     sendResponse('foobar');
  //   }
  // });
}

window.onload = main;
