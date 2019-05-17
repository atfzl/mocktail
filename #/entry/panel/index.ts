// tslint:disable-next-line:no-console
console.log('panel');

import { Store } from 'webext-redux';

const store = new Store();

store.ready().then(() => {
  const app = document.getElementById('app')!;

  store.subscribe(() => {
    app.innerHTML = store
      .getState()
      .network.rows.map((row: any) => row.url)
      .join('\n');
  });
});
