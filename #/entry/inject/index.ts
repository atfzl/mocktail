import { xhook } from 'xhook';

const src = 'xhook-atfzl';

xhook.enable();
window.postMessage({ src, evt: 'enable' }, '*');

xhook.before((request: any) => {
  window.postMessage({ src, evt: 'before', body: request.url }, '*');
});
