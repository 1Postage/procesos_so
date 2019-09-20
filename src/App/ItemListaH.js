import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

export default function ItemListaH(props) {
  const classes = useStyles();
  return (
    <Grid item xs>
      <Paper className={classes.paper}>{props.data}</Paper>
    </Grid>
  );
}
