import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = (preloadedState = {}) => {
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};


export default store;
