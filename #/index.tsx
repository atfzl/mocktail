import App from '#/app';
import { css } from 'emotion';
import { createRoot } from 'solid-js';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  box-sizing: border-box;
  position: fixed;
  width: 100vw;
  height: 300px;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid grey;
`;

const renderApp = () => {
  const appElement = document.getElementById('mocktail');

  if (appElement) {
    appElement.parentNode!.removeChild(appElement);
  }

  createRoot(() =>
    document.body.appendChild((
      <div className={globalStyles} id="mocktail">
        <App />
      </div>
    ) as HTMLElement),
  );
};

if (module.hot) {
  module.hot.accept();

  renderApp();
}
