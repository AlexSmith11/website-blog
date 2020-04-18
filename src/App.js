import React from 'react';
import './App.css';
import elliot from './elliot.jpg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={elliot} className='App-logo' alt='elliot' />
        <p>I win, Elliot eat my ass</p>
        {/* <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
