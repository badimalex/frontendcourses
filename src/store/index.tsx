import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware } from 'redux';
import mySaga from '../sagas';

import rootReducer from '../reducers';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(mySaga);

  return store;
}