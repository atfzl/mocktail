import { css } from 'emotion';
import App from './app';

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

function Root() {
  return (
    <div className={globalStyles} id="mocktail">
      <App />
    </div>
  );
}

export default Root;
