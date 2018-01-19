import React from 'react';
import MainContainer from './MainContainer';
import logo from './BBC.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">
        <img src={logo} alt="BBC logo" height="20" /> | Article Composer{' '}
      </h1>{' '}
    </header>
    <MainContainer />
  </div>
);

export default App;
