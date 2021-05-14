import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons'
const { Text, Title } = Typography
export const CrearTicket = () => {
  const newTicket = () => {
    console.log('New');
  }
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>
            Presione el botón para un nuevo t icket
          </Title>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size="large"
            onClick={newTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>
            Su número
          </Text>
          <br/>
          <Text type="success" style={{fontSize: 55}}>
            55
          </Text>
        </Col>
      </Row>
    </>
  )
}
