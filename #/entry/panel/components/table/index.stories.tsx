import { storiesOf } from '@storybook/html';
import Table from './';

storiesOf('Table', module).add('default', () => (
  <Table
    rows={[
      {
        request: {
          url: 'backend.js',
          method: 'GET',
          headers: {
            'response-type': 'json',
          },
        },
        response: {
          status: 200,
          headers: {
            foo: 'bar',
          },
          data: '{data: []}',
        },
      },
      {
        request: {
          url: 'script.js',
          method: 'GET',
          headers: {
            'response-type': 'json',
          },
        },
      },
      {
        request: {
          url: 'backend.js',
          method: 'GET',
          headers: {
            'response-type': 'json',
          },
        },
      },
    ]}
  />
));
