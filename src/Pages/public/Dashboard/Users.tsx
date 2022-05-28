import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Users() {
  return (
    <div>
      Users
      <Outlet />
    </div>
  )
}
