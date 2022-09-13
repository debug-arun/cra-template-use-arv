import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div className="App">
      {/*Feel free to edit and put up your code*/}
      <Jumbotron title=""></Jumbotron> 
      {/*The title value inserted here will be shown in the Jumbotron*/}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
