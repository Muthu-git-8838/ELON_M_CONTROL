import React, { useEffect } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const logout = () => {
  const navigate = useNavigate('')
  const handleLogout = async () => {
    let user = sessionStorage.getItem('user')
    confirmAlert({
      title: `${user}`,
      message: 'Are you sure to logout?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            sessionStorage.clear()
            navigate('/login')
            toast.success('Logged Out successfully', { position: 'top-center', theme: 'dark' })
          },
        },
        {
          label: 'No',
          onClick: () => null,
        },
      ],
    })
  }
  useEffect(() => {
    handleLogout()
  }, [])
  return <div className="d-flex justify-content-center align-items-center"></div>
}

export default logout
