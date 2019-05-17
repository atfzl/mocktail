import { Store } from 'webext-redux';
import { actions } from '../background/reducers/global';

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

function main() {
  const store = new Store();
  store.ready().then(() => {
    store.dispatch(actions.ping());
  });
}

window.onload = main;
