import Table from '#/components/table';
import { networkState } from '#/modules/network/state';
import { css } from 'emotion';

function App() {
  return (
    <div
      className={css`
        height: 100%;
      `}
    >
      <Table
        selectedRowId={(void 0, networkState.selectedRowId)}
        rows={(void 0, networkState.rows)}
      />
    </div>
  );
}

export default App;
