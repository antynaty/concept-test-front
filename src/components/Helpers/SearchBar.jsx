import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const chars = useSelector(state => state.chars);
  const filteredChar = chars.filter(char => {
    return char.name.toLowerCase().include(search.toLowerCase())
  });
  return (
    <React.Fragment>
      <input type="text" placeholder="Search Char" onChange={event => setSearch(event.target.value)} />
    </React.Fragment>
  )
}

export default SearchBar;