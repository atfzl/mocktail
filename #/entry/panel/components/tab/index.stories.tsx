import { storiesOf } from '@storybook/html';
import Tab from './';

storiesOf('Tab', module)
  .add('with text', () => <Tab>Click me</Tab>)
  .add('with emoji', () => <Tab>😀 😎 👍 💯</Tab>);
