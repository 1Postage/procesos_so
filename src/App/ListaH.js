import React from 'react';
import { Grid } from '@material-ui/core';
import ItemListaH from './ItemListaH';

export default function ListaH(props) {
  return (
    <Grid container spacing={3} >
      {props.lista.map(item => (
        <ItemListaH data={item}/>
      ))}
    </Grid>
  );
}
