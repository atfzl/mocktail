import { combineReducers } from 'redux';
import { combineEpics, Epic } from 'redux-observable';
import { ActionType } from 'typesafe-actions';
import {
  actions as globalActions,
  epics as globalEpics,
  IReducerState as IGlobalState,
  reducer as globalReducer,
} from './global';

export interface IRootState {
  global: IGlobalState;
}

export const rootReducer = combineReducers<IRootState>({
  global: globalReducer,
});

export const rootEpic = combineEpics(globalEpics);

export type IRootAction = ActionType<typeof globalActions>;

export type IEpic = Epic<IRootAction, IRootAction, IRootState>;
