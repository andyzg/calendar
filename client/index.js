/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { Provider } from 'react-redux';
import { createStore} from 'redux';

// let store = createStore(null);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
