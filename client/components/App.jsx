/*
    ./client/components/App.jsx
*/
import React from 'react';

import Day from './Day.jsx';
import Todos from './Todos.jsx';
import Sidebar from './Sidebar.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Content />
      </div>);
  }
}

class Nav extends React.Component {
  render() {
    return (
      <div className="nav"></div>
    );
  }
}


class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Day />
        <Todos />
        <Sidebar />
      </div>
    );
  }
}

