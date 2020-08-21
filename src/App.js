import React from 'react';

import SearchBar from './components/Helpers/SearchBar';
import Chars from './components/Char/Chars';
import Pages from './components/Helpers/Pages';

import './App.css';
function App() {
  return (

    <div className="App">
      {/* <SearchBar/> */}
      <Chars />
      <Pages />
    </div>

  );
}

export default App;