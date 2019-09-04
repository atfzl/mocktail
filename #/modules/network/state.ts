import { NetworkRow } from '#/interfaces';
import { createState } from 'solid-js';

interface State {
  rows: NetworkRow[];
  selectedRowId?: string;
}

const [networkState, setNetworkState] = createState<State>({
  rows: [],
});

export { networkState, setNetworkState };
