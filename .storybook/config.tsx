import '#/entry/panel/global.styles.tsx';
import { configure } from '@storybook/html';

// automatically import all files ending in *.stories.tsx
const req = require.context('../#/entry/panel', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
