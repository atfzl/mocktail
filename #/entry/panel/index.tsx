// tslint:disable-next-line:no-console
console.log('panel');

import { RootState } from '#/reducers';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';

const store = new Store();

store.ready().then(() => {
  const appNode = document.getElementById('app');

  render(
    <Provider store={store}>
      <div>
        {(store.getState() as RootState).network.rows.map(row => (
          <div>
            {row.request.url}: {row.response && row.response.data}
          </div>
        ))}
      </div>
    </Provider>,
    appNode,
  );
});
