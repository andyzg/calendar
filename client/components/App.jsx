/*
    ./client/components/App.jsx
*/
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
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
