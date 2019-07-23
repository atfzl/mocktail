import { MockedNetworkRow, NetworkRow } from '#/interfaces';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

type ILogData = {
  filters: {
    searchText?: string;
  };
  rows: NetworkRow[];
};

type IMockData = {
  filters: {
    searchText?: string;
  };
  rows: MockedNetworkRow[];
};

export interface ReducerState {
  logs: ILogData;
  mocks: IMockData;
}

const InitialState: ReducerState = {
  logs: { filters: {}, rows: [] },
  mocks: { filters: {}, rows: [] },
};

const reducer = reducerWithInitialState<ReducerState>(InitialState).build();

export default reducer;
