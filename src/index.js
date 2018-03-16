import React, { createStore } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import 'milligram';

import configureStore from './store/index';

let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(store);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,document.getElementById('root'));


registerServiceWorker();
