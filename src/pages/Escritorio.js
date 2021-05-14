import React, { useState } from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';
import { Redirect, useHistory } from 'react-router';


const {Text, Title} = Typography

export const Escritorio = () => {
  const history = useHistory()
  useHideMenu(false);
  const [user] = useState(getUserStorage())
  const salir = () => {
    localStorage.clear();
    history.replace('/ingresar');
  }
  const siguiente = () => {
    console.log('Next.......')
  }
  if (!user.agente || !user.escritorio) return <Redirect to="/ingresar"/>
  return (
    <>
      <Row>
        <Col spam={20}>
          <Title level={2}>{user.agente}</Title>
          <Text>Usted está  trabajando en el escritorio: </Text>
          <Text type="success">{user.escritorio}</Text>
        </Col>
        <Col spam={4} align="right">
          <Button 
            type="danger"
            onClick={salir}
          >
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col spam={20}>
          <Text>Esta atendiendo el ticket: </Text>
          <Text 
            style={{fontSize: 30}}
            type="danger"
          >55</Text>
        </Col>
      </Row>
      <Row>
        <Col offset={20} spam={6} align="right">
          <Button 
            type="primary"
            onClick={siguiente}
          >
            <RightOutlined />
            Siguente
          </Button>
        </Col>
      </Row>
    </>
  )
}
