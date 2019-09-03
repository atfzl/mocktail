import Root from '#/root';
import { createRoot } from 'solid-js';

function cleanup() {
  const appElement = document.getElementById('mocktail');

  if (appElement) {
    appElement.parentNode!.removeChild(appElement);
  }
}

function renderRoot() {
  createRoot(() => {
    document.body.appendChild(<Root /> as HTMLElement);
  });
}

if (module.hot) {
  module.hot.accept();
  cleanup();
  renderRoot();
}
