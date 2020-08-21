import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const chars = useSelector(state => state.chars);
  const filteredChar = chars.filter(char => {
    return char.name.toLowerCase().include(search.toLowerCase())
  });
  return (
    <React.Fragment>
      <TextField type="text" placeholder="Search Char" onChange={event => setSearch(event.target.value)} variant="outlined" />
    </React.Fragment>
  )
}

export default SearchBar;