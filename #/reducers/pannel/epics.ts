import { Epic } from '#/reducers';
import { combineEpics } from 'redux-observable';

const epics: Epic[] = [];

export default combineEpics(...epics);
