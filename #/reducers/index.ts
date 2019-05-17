import { combineReducers } from 'redux';
import { combineEpics, Epic } from 'redux-observable';
import { ActionType } from 'typesafe-actions';
import {
  actions as actions1,
  epics as epics1,
  IReducerState as ReducerState1,
  reducer as reducer1,
} from './global';
import {
  actions as actions2,
  epics as epics2,
  IReducerState as ReducerState2,
  reducer as reducer2,
} from './network';

export interface IRootState {
  global: ReducerState1;
  network: ReducerState2;
}

export const rootReducer = combineReducers<IRootState>({
  global: reducer1,
  network: reducer2,
});

export const rootEpic = combineEpics(epics1, epics2);

export type IRootAction =
  | ActionType<typeof actions1>
  | ActionType<typeof actions2>;

export type IEpic = Epic<IRootAction, IRootAction, IRootState>;
