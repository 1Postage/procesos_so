import React from 'react';
import TopDiagram from './TopDiagram';
import { Grid, Typography } from '@material-ui/core';
import DetailList from './DetailList';
import { Divider } from 'antd';

let cola = ['D', 'E', 'F', 'G'];

let proceso = ['C'];

let terminados = ['A', 'B'];

export default function App() {
  return (
    <div>
      <TopDiagram cola={cola} proceso={proceso} terminados={terminados} />
      <Divider></Divider>
      <div style={{ margin: 50 }}>
        <Typography variant="h3" style={{ marginBottom: 10 }}>Detalle</Typography>
        <Grid container direction="row" justify="flex-start" spacing={3}>
          <DetailList list={cola} title={'Cola de procesos'} />
          <DetailList list={proceso} title={'Procesando'} />
          <DetailList list={terminados} title={'Finalizados'} />
        </Grid>
      </div>
    </div>
  );
}
