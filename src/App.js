import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Container from './components/Container'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container />
    </div>
  );
}

export default App;