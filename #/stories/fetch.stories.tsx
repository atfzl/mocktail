import { setNetworkState } from '#/modules/network/state';
import Root from '#/root';
import { storiesOf } from '@storybook/html';
import { createRoot } from 'solid-js';

createRoot(() => {
  storiesOf('fetch', module).add('default', () => {
    setNetworkState({
      rows: [
        {
          request: {
            id: '1',
            url: 'url1',
            method: 'get',
            headers: {},
          },
        },
        {
          request: {
            id: '2',
            url: 'url2',
            method: 'get',
            headers: {},
          },
        },
        {
          request: {
            id: '3',
            url: 'url3',
            method: 'get',
            headers: {},
          },
        },
      ],
    });

    return <Root />;
  });
});
