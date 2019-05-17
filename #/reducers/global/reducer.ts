import actions from '#/reducers/global/actions';
import { immerCase } from '#/utils';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface IReducerState {
  message: string;
}

const InitialState: IReducerState = { message: 'hello' };

const reducer = reducerWithInitialState<IReducerState>(InitialState)
  .withHandling(
    immerCase(actions.ping, draft => {
      draft.message = 'PING';
    }),
  )
  .withHandling(
    immerCase(actions.pong, draft => {
      draft.message = 'PONG';
    }),
  )
  .build();

export default reducer;
