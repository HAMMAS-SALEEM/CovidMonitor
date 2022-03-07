import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import countriesReducer from './Countries/countries';

const reducer = combineReducers({
  countriesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
