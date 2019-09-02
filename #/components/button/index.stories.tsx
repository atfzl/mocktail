import { storiesOf } from '@storybook/html';
import Button from '.';

storiesOf('Button', module)
  .add('with text', () => <Button>Click me</Button>)
  .add('with emoji', () => <Button>😀 😎 👍 💯</Button>);
