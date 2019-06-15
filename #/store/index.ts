import { rootEpic, rootReducer, RootState } from '#/reducers';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { wrapStore } from 'webext-redux';

export function configureStore(initialState?: RootState) {
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

  const s = createStore<RootState>(rootReducer, initialState!, middleware);

  epicMiddleware.run(rootEpic as any);

  return s;
}

const store = configureStore();

wrapStore(store);

export default store;
