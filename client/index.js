/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

let store = createStore(reducers);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
