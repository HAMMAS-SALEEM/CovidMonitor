import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducer = combineReducers({

});

const store = createStore(
  reducer,
  applyMiddleware(),
);

export default store;
