import { NetworkRow } from '#/interfaces';
import { immerCase } from '#/utils';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import actions from './actions';

export interface IReducerState {
  rows: NetworkRow[];
}

const InitialState: IReducerState = { rows: [] };

const reducer = reducerWithInitialState<IReducerState>(InitialState)
  .withHandling(
    immerCase(actions.appendRow, (draft, payload) => {
      draft.rows.push(payload);
    }),
  )
  .withHandling(
    immerCase(actions.clearRows, draft => {
      draft.rows = [];
    }),
  )
  .build();

export default reducer;
