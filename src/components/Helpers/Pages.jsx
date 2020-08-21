import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions';

const useStyles = makeStyles(theme => ({
  disabledButton: {
    backgroundColor: 'red'
  },
}));

const Pages = () => {
  const page = useSelector(state => state.page);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [nextPage, setnextPage] = useState(null);
  const [prevPage, setPreviousPage] = useState(null); 

  return (
    <div className="button-page">
      {prevPage ? <Button classes={{ disabled: classes.disabledButton }} onClick={() => dispatch(decrement(1))}>Anterior</Button> : <Button disabled={true}>Anterior</Button>}
      {nextPage ? <Button onClick={() => dispatch(increment(1))}>Siguiente</Button > : <Button disabled={true}>Siguiente</Button>}
    </div>
  );
}

export default Pages;