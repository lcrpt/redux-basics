import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = (state={}, action) => {
  return state;
};

const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch((dispatch) => {
  dispatch({ type: 'FOO' });
  dispatch({ type: 'BAR' });
});
