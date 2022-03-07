import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './Countries/countries';
import regionsReducer from './Regions/regions';

const reducer = combineReducers({
  countriesReducer,
  regionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
