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
            url: 'url',
            method: 'get',
            headers: {},
          },
        },
      ],
    });

    return <Root />;
  });
});
