import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ColourFrom256} from "./ColourChart";


function App() {
  let colour = ColourFrom256(76).toHexString();
  let hstyle = {color: colour};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style = {hstyle}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p style={hstyle}>{colour}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
