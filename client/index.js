/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { Provider } from 'react-redux';
import Reducers from './reducers';
import { createStore} from 'redux';

let store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
