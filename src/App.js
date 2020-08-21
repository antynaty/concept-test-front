import React from 'react';

import SearchBar from './components/Helpers/SearchBar';
import Chars from './components/Char/Chars';
import Pages from './components/Helpers/Pages';

import './App.css';
function App() {
  return (

    <div className="App">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" />
      {/* <SearchBar/> */}
      <div className="tittle-app">
        <h2>Star Wars Chars</h2>
      </div>
      <Chars />
      {/* <Pages /> */}
    </div>

  );
}

export default App;