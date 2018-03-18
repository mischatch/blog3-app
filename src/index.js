import React, { createStore } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import 'milligram';

import configureStore from './store';

import { Router, hashHistory } from 'react-router';

let store;
 if (window.currentUser) {
   const preloadedState = { session: { currentUser: window.currentUser , errors: [] }};
   store = configureStore(preloadedState);
   delete window.currentUser;
 } else {
   store = configureStore({});
 }





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
