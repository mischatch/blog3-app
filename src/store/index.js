import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';



const store = (preloadedState = {}) => {
  return (
    createStore(
      rootReducer,
      preloadedState,
      compose(applyMiddleware(thunk))
    )
  );
};


export default store;
