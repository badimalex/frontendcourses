import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import mySaga from './sagas';

import rootReducer from './reducers';

import './styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { routes } from './routes';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Router>{renderRoutes(routes)}</Router>
  </Provider>,
  document.getElementById('root')
);
