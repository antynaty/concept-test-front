import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


import './chars.css';
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
    padding: theme.spacing(7, 5),
    color: 'white'
  },
  input: {
    color: "black",
    backgroundColor: "white"
  },
  disabledButton: {
    backgroundColor: 'red'
  },
  table: {
    minWidth: 100,
  },
}));

const Char = () => {
  const [chars, setChars] = useState([]);
  const [isLoadedChars, setisLoadedChars] = useState(false);
  const [search, setSearch] = useState('');
  const [nextPage, setnextPage] = useState(null);
  const [prevPage, setPreviousPage] = useState(null); 
  const [charSelected, setCharSelected] = useState('');
  
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
          console.log(result.data)
          setChars(result.data.results);
          setnextPage(result.data.next);
          setPreviousPage(result.data.previous);
          setisLoadedChars(true);
        })
    }
    fetchingPeopleData();
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <TextField type="text" placeholder="Search Char" onChange={event => setSearch(event.target.value)} variant="outlined" InputProps={{
          className: classes.input
        }} />
      </div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6}>
          {
            isLoadedChars ?
              filteredChar.map(char => (

                <Paper className={classes.paper} key={char.id}>
                  <div className="paper-container">
                    <h3>{char.name}</h3>
                    <button >Ver</button>
                  </div>
                </Paper>
              ))
              : <p>Loading Chars...</p>
          }
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}> 
              <Typography variant="subtitle1" gutterBottom> Selecciona un personaje</Typography>
              <p>{charSelected.name}</p>
              <p>{charSelected.height}</p>
              <p>{charSelected.gender}</p>
              <p>{charSelected.homeworld}</p>
              <p>{charSelected.population}</p>
          </Paper>
        </Grid>
      </Grid>

      {/* <div className={classes.content}> */}
      <div className="button-page">
        {prevPage ? <Button classes={{ disabled: classes.disabledButton }}>Anterior</Button> : <Button disabled={true}>Anterior</Button>}
        {nextPage ? <Button>Siguiente</Button> : <Button disabled={true}>Siguiente</Button>}
      </div>
    </div>
  )
}

export default Char;