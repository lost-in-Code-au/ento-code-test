import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Scheduler">
        <div className="Form">
          <h1>Form</h1>
          <button>Submit</button>
        </div>
        <div className="Over-view">
          <h1>Over-view</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
