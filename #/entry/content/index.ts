import actions from '#/reducers/global/actions';
import { Store } from 'webext-redux';

// tslint:disable-next-line:no-console
console.log('content');

{
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
}

interface Data<T = any> {
  body: T;
  evt: string;
  src: string;
}

window.addEventListener('message', event => {
  if (event.source !== window) {
    return;
  }

  const data: Data = event.data;

  if (!data || data.src !== 'xhook-atfzl') {
    return;
  }

  switch (data.evt) {
    case 'enable': {
      console.log('hook enabled');
      break;
    }
    case 'before': {
      console.log('hook before', data.body);
      break;
    }
  }
});

function main() {
  const store = new Store();
  store.ready().then(() => {
    store.dispatch(actions.ping());
  });
}

window.onload = main;
