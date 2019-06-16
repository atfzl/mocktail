import { NetworkRow } from '#/interfaces';
import { immerCase } from '#/utils';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actions from './actions';

export interface ReducerState {
  rows: NetworkRow[];
}

const InitialState: ReducerState = { rows: [] };

const reducer = reducerWithInitialState<ReducerState>(InitialState)
  .withHandling(
    immerCase(actions.appendRow, (draft, payload) => {
      draft.rows.push(payload);
    }),
  )
  .withHandling(
    immerCase(actions.updateRow, (draft, payload) => {
      const index = draft.rows.findIndex(
        row => row.request.url === payload.request.url,
      );
      draft.rows[index] = { ...draft.rows[index], ...payload };
    }),
  )
  .withHandling(
    immerCase(actions.clearRows, draft => {
      draft.rows = [];
    }),
  )
  .build();

export default reducer;
