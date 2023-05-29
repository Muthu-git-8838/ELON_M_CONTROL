import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const logout = () => {
  const navigate = useNavigate('')
  const handleLogout = async () => {
    let confirmed = confirm('Are You sure to logout?')
    {
      confirmed ? await localStorage.removeItem('AuthID') : null
    }
    navigate('/login')
    toast.success('Logged Out successfully', { position: 'top-center', theme: 'dark' })
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button className="btn btn-danger" onClick={handleLogout}>
        Log-Out
      </button>
    </div>
  )
}

export default logout
