import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class MyWidget extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MyWidget</h1>
        </header>
      </div>
    );
  }
}

