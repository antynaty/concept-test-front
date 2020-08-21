import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { increment, decrement } from '../../actions';

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
  buttonPage: {
    paddingTop: 14
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

  const page = useSelector(state => state.page);
  const dispatch = useDispatch();

  const classes = useStyles();
  const filteredChar = chars.filter(char => {
    return char.name.toLowerCase().includes(search.toLowerCase())
  });
  // const urlAPI ='https://swapi.dev/api/people/';
  const urlAPIlocal = 'http://localhost:3030/chars/';
  useEffect(() => {
    const fetchingPeopleData = async () => {
      await axios({
        method: 'GET',
        url: urlAPIlocal + `all?page=${page}&limit=10`,
        responseType: 'json'
      })
        .then(result => {
          const data = result.data.resultUsers;
          setChars(data);
          setnextPage(result.data.next);
          setPreviousPage(result.data.previous);
          setisLoadedChars(true);
        })
    }
    fetchingPeopleData();
  }, [page])

  const fetchChar = async (event, idChar) => {
    event.preventDefault(); 
    await axios({
      method: 'GET',
      url: urlAPIlocal + `${idChar}`,
      responseType: 'json'
    })
      .then(result => {
        setCharSelected(result.data) 
      })
  }
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <TextField type="text" placeholder="Filtra tu búsqueda" onChange={event => setSearch(event.target.value)} variant="outlined" InputProps={{
          className: classes.input
        }} />
      </div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6}>
          {
            isLoadedChars ?
              filteredChar.map(char => (
                <Paper className={classes.paper} key={char._id}>
                  <div className="paper-container">
                    <h3>{char.name}</h3>
                    <button onClick={event => { fetchChar(event, char._id) }}>Ver</button>
                  </div>
                </Paper>
              ))
              : <p>Loading Chars...</p>
          }
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="subtitle1" gutterBottom> Selecciona un personaje</Typography>
            <p>Nombre         : {charSelected.name}</p>
            <p>Estatura       : {charSelected.height}</p>
            <p>Genero         : {charSelected.gender}</p>
            <p>Nombre Planeta : {charSelected.homeworld}</p>
            <p>Poblacion total: {charSelected.population}</p>
          </Paper>
        </Grid>
      </Grid>

      {/* <div className={classes.content}> */}
      <div className={classes.buttonPage}>
        {prevPage ? <button classes={classes.pagedButton} onClick={() => dispatch(decrement(1))}>Anterior</button> : <button disabled={true}>Anterior</button>}
        {nextPage ? <button onClick={() => dispatch(increment(1))}>Siguiente</button > : <button disabled={true}>Siguiente</button>}
      </div>
    </div>
  )
}

export default Char;