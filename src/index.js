import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'milligram';

import configureStore from './store';

let store;
 if (window.currentUser) {
   // debugger
   const preloadedState = { session: { currentUser: window.currentUser , errors: [] }};
   store = configureStore(preloadedState);
   delete window.currentUser;
 } else {
   // debugger
   store = configureStore({});
 }

 const message = 'message';
 // console.log(store);




ReactDOM.render(
  <Provider store={store} message={message}>
    <App />
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
