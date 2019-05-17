import { applyMiddleware, createStore, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { wrapStore } from 'webext-redux';
import { IRootState, rootEpic, rootReducer } from '../reducers';

export function configureStore(initialState?: IRootState) {
  const epicMiddleware = createEpicMiddleware();

  const middlewares = [epicMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').createLogger({
      collapsed: true,
      diff: true,
    });

    middlewares.push(logger);
  }

  const middleware = applyMiddleware(...middlewares);

  const s = createStore(rootReducer, initialState!, middleware) as Store<
    IRootState
  >;

  epicMiddleware.run(rootEpic as any);

  return s;
}

const store = configureStore();

wrapStore(store);

export default store;
