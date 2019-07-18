import globalActions from '#/reducers/global/actions';
import networkActions from '#/reducers/network/actions';
import { receiveMessage } from '#/utils/message';
import { injectScript } from '#/utils/script';
import { Store } from 'webext-redux';

console.info('content script');

injectScript('inject.bundle.js');

const store = new Store();

store.ready().then(() => {
  store.dispatch(globalActions.ping());

  receiveMessage(async payload => {
    switch (payload.evt) {
      case 'enable': {
        console.info('hook enabled');
        store.dispatch(networkActions.clearRows());
        return true;
      }
      case 'before': {
        console.info('hook before', payload.body);
        store.dispatch(networkActions.appendRow(payload.body));
        return true;
      }
      case 'after': {
        console.info('hook after', payload.body);
        store.dispatch(networkActions.updateRow(payload.body));
        return true;
      }
    }
    return;
  });
});
