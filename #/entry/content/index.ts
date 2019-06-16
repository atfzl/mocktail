import { NetworkRowMessage } from '#/interfaces';
import globalActions from '#/reducers/global/actions';
import networkActions from '#/reducers/network/actions';
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

const store = new Store();

store.ready().then(() => {
  store.dispatch(globalActions.ping());

  window.addEventListener('message', event => {
    if (event.source !== window) {
      return;
    }

    const data: NetworkRowMessage = event.data;

    if (!data || data.src !== 'xhook-atfzl') {
      return;
    }

    switch (data.evt) {
      case 'enable': {
        console.log('hook enabled');
        store.dispatch(networkActions.clearRows());
        break;
      }
      case 'before': {
        console.log('hook before', data.body);
        store.dispatch(networkActions.appendRow(data.body));
        break;
      }
      case 'after': {
        console.log('hook after', data.body);
        store.dispatch(networkActions.updateRow(data.body));
        break;
      }
    }
  });
});
