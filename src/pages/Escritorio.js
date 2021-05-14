import React from 'react'
import { Button, Col, Divider, Row, Typography } from 'antd'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { useHideMenu } from '../hooks/useHideMenu'

const {Text, Title} = Typography

export const Escritorio = () => {
  useHideMenu(false);
  const salir = () => {
    console.log('saliendo.........')
  }
  const siguiente = () => {
    console.log('Next.......')
  }
  return (
    <>
      <Row>
        <Col spam={20}>
          <Title level={2}>Helis</Title>
          <Text>Usted está  trabajando en el escritorio: </Text>
          <Text type="success">5</Text>
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
