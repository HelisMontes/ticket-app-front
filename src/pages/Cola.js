import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Typography, List, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

const { Text, Title } = Typography;

export const Cola = () => {
  useHideMenu(true);
  const {socket} = useContext(SocketContext);
  const [ticketList, setTicketList] = useState([]);
  useEffect(() => {
    socket.on('tickets-asignados', (tickets) => {
      setTicketList(tickets);
    });
    return () => {
      socket.off('tickets-asignados');
    }
  }, [socket]);
  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={ticketList.slice(0,3)}
            renderItem={ item => (
               <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16}}
                  actions={[
                    <Tag color="volcano">{item.agente}</Tag>,
                    <Tag color="magenta">Escritorio{item.escritorio}</Tag>,
                  ]}
                >
                  <Title>No. {item.numero}</Title>
                </Card>
               </List.Item>
            )}
          />
        </Col>
        {
          (ticketList.length > 3) && (
             <Col span={12}>
              <Divider>Historial</Divider>
              <List
                dataSource={ticketList.slice(3)}
                renderItem={item =>(
                  <List.Item>
                    <List.Item.Meta
                      title={`Ticket No. ${item.numero}`}
                      description={
                        <>
                          <Text type="secondary">En el escritorio: </Text>
                          <Tag color="magenta">{item.escritorio}</Tag>
                          <Text type="secondary">Agente: </Text>
                          <Tag color="volcano">{item.agente}</Tag>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            </Col>
          )
        }
      </Row>
    </>
  )
}
