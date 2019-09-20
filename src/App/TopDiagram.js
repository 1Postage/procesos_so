import React from 'react';
import { Row, Col } from 'antd';
import ListaH from './ListaH';
import { Typography } from '@material-ui/core';

export default function TopDiagram(props) {
  return (
    <Row style={{ margin: 10 }}>
      <Col xs={1} sm={3} md={5} lg={7} xl={9} style={{ margin: 10 }}>
        <Row style={{ textAlign: 'center', background: '#ff000099' }}>
          <Typography variant="h4">Cola de procesos</Typography>
        </Row>
        <Row>
          <ListaH lista={props.cola}></ListaH>
        </Row>
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{ margin: 10 }}>
        <Row style={{ textAlign: 'center', background: '#00ff0099' }}>
          <Typography variant="h4">Proceso</Typography>
        </Row>
        <Row>
          <ListaH lista={props.proceso}></ListaH>
        </Row>
      </Col>
      <Col xs={1} sm={3} md={5} lg={7} xl={9} style={{ margin: 10 }}>
        <Row style={{ textAlign: 'center', background: '#0000ff99' }}>
          <Typography variant="h4">Terminados</Typography>
        </Row>
        <Row>
          <ListaH lista={props.terminados}></ListaH>
        </Row>
      </Col>
    </Row>
  );
}
