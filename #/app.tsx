import Table from '#/components/table';
import { networkState } from '#/modules/network/state';

function App() {
  return <Table rows={(void 0, networkState.rows)} />;
}

export default App;
