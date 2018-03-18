import { createStore } from 'redux';

import rootReducer from '../reducers/index';


const store = (preloadedState = {}) => {
  createStore(
    rootReducer,
    preloadedState
  );
};


export default store;
