import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
  //   let auth = { token: false }
  let key = sessionStorage.getItem('AuthID')
  return key ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
