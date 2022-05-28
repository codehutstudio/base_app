import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from '../../../Components/LayoutElements'

export default function Dashboard() {
  return (
    <Col>
    <Row>Dashboard</Row>
    <Row><Outlet /></Row>
    </Col>
  )
}
