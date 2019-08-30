import { createRoot } from 'solid-js';
import Root from './root';

createRoot(() => {
  document.getElementById('app')!.appendChild(<Root /> as any);
});
