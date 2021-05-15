import React, { useContext, useState } from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';
import { Redirect, useHistory } from 'react-router';
import { SocketContext } from '../context/SocketContext';


const {Text, Title} = Typography

export const Escritorio = () => {
  const history = useHistory()
  useHideMenu(false);
  const {socket} = useContext(SocketContext);
  const [user] = useState(getUserStorage());
  const [ticket, setTicket] = useState({});

  const salir = () => {
    localStorage.clear();
    history.replace('/ingresar');
  }
  const siguiente = () => {
    socket.emit('next-ticket', user, (ticket) => {
      setTicket(ticket);
    });
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
      {
        ticket?.id 
        ? (
          <Row>
            <Col spam={20}>
              <Text>Esta atendiendo el ticket: </Text>
              <Text 
                style={{fontSize: 30}}
                type="danger"
              >{ticket.numero}</Text>
            </Col>
          </Row>
          )
        : (
          <Row>
            <Col spam={20}>
              <Text
                type="success"
                style={{fontSize: 20}}
              >No hay tickets en cola</Text>
            </Col>
          </Row>
          )
      }
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
