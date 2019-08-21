console.info('panel');

document.querySelector('#app')!.textContent = 'panel';

const port = chrome.runtime.connect({ name: 'atfzl-panel' });

port.onMessage.addListener(console.info);
port.postMessage('for bg from panel');
