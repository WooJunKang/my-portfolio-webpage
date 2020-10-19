import React from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './Nav'
import Greeting from './Greeting'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Greeting />
    </div>
  );
}

export default App;
