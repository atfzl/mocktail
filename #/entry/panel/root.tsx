import Table from './components/table';
import './global.styles';
import { networkState } from './modules/network/state';

function Root() {
  return <Table rows={(void 0, networkState.rows)} />;
}

export default Root;
