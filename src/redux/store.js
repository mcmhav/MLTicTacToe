import { applyMiddleware, createStore, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { Map } from 'immutable';

import sagas from '../sagas';
import middleware from './middleware';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(...middleware, sagaMiddleware)
);

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  Map({}),
  enhancer
);

sagaMiddleware.run(sagas);

export default store;
