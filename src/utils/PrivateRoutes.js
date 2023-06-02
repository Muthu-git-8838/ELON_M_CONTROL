// import React from 'react'
// import { Outlet, Navigate } from 'react-router-dom'

// const PrivateRoutes = () => {
//   //   let auth = { token: false }
//   let key = sessionStorage.getItem('token')
//   return key ? <Outlet /> : <Navigate to="/login" />
// }

// export default PrivateRoutes

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Loader from 'src/views/profile/portfolio/Loader'

const PrivateRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('https://mcontrol-api.onrender.com/user', {
          headers: {
            authorization: sessionStorage.getItem('token'),
          },
        })
        setIsAuthenticated(true)
      } catch (e) {
        console.log(e)
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }
    if (sessionStorage.getItem('token')) fetchData()
    else setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Loader /> // Render a loading indicator while the API call is in progress
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
