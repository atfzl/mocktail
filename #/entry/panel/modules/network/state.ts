import { PANEL_PORT } from '#/constants';
import { NetworkRow } from '#/interfaces';
import { createState } from 'solid-js';

interface State {
  rows: NetworkRow[];
}

const [networkState, setNetworkState] = createState<State>({
  rows: [],
});

const panelPort = chrome.runtime.connect({ name: PANEL_PORT });

panelPort.onMessage.addListener(message => {
  console.log('message', message);

  switch (message.type) {
    case 'before': {
      setNetworkState(state => {
        return { rows: state.rows.concat(message.payload) };
      });
      return;
    }
  }
});

export { networkState, setNetworkState };
