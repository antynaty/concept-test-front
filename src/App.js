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
        <h2> <font color="#b4a500">¿Crees saber todo sobre los personajes de Star Wars?</font></h2>
        <h3> <font color="#8a7e01">Pon a prueba tus conocimientos</font></h3>
      </div>
      <Chars />
      {/* <Pages /> */}
    </div>

  );
}

export default App;