import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from '../../../Components/LayoutElements'
import DashboardLayout from '../../../Components/Layouts/DashboardLayout'
import Content from '../../../PageComponents/Dashboard/Content'
import Footer from '../../../PageComponents/Dashboard/Footer'
import Header from '../../../PageComponents/Dashboard/Header'
import Sidebar from '../../../PageComponents/Dashboard/Sidebar'

export default function Dashboard() {
  return (
    <DashboardLayout
      header={<Header />}
      sidebar={<Sidebar />}
      content={<Content />}
      footer={<Footer />}
    />)
}
