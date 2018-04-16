import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'milligram';

import configureStore from './store';

let store;

if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser , errors: [] }};
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}




ReactDOM.render(
  <Provider store={store} >
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
