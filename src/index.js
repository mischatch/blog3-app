import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import 'milligram';

import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,document.getElementById('root'));


registerServiceWorker();
