import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 12
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  content: {
    alignItems: 'center',
    padding: theme.spacing(7, 5)
  },
}));

const Char = () => {
  const [chars, setChars] = useState([]);
  const [isLoadedChars, setisLoadedChars] = useState(false);
  const [search, setSearch] = useState('');

  const classes = useStyles();
  const filteredChar = chars.filter(char => {
    return char.name.toLowerCase().includes(search.toLowerCase())
  });

  useEffect(() => {
    const fetchingPeopleData = async () => {
      await axios({
        method: 'GET',
        url: 'https://swapi.dev/api/people/',
        responseType: 'json'
      })
        .then(result => {
          console.log(result.data.results)
          setChars(result.data.results);
          setisLoadedChars(true);
        })
    }
    fetchingPeopleData();
  }, [])
  return (
    <div className={classes.root}>
      <input type="text" placeholder="Search Char" onChange={event => setSearch(event.target.value)} />
      <Grid container spacing={3}>
        <div className={classes.content}>
          <h1>Star Wars Chars</h1>
        </div>
        <Grid item xs={12}>
          {
            isLoadedChars ?

              filteredChar.map(char => (
                <Paper className={classes.paper} key={char.id}>
                  <div className="titular-container">
                    <h3>{char.name}</h3>
                    <button >X</button>
                  </div>
                </Paper>
              ))
              : <p>Loading Chars...</p>
          }
        </Grid>
      </Grid>
    </div>
  )
}

export default Char;