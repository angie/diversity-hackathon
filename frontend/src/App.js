import React, { Component } from 'react';
import logo from './logo.svg';
import MainContainer from './MainContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BBC | Article Composer </h1>{' '}
        </header>
        <MainContainer />
      </div>
    );
  }
}

export default App;
