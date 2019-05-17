console.log('inject');

import { xhook } from 'xhook';

const src = 'xhook-atfzl';

xhook.enable();
window.postMessage({ src, evt: 'enable' }, '*');

console.log('before activating before');

xhook.before((request: any) => {
  console.log('before called', request);

  {
    const { url, method, body, headers } = request;

    window.postMessage(
      { src, evt: 'before', body: { url, method, body, headers } },
      '*',
    );
  }
});
