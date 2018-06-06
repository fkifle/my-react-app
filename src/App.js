import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import MyWidget from './MyWidget';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <ErrorBoundary>
          <MyWidget throwError="true"/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
