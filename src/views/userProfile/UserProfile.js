import React, { useEffect, useState } from 'react'
import user from '../../assets/images/avatars/10.png'
import axios from 'axios'
import Loader from '../profile/portfolio/Loader'
import { toast } from 'react-toastify'
const UserProfile = () => {
  const [userData, setUserData] = useState(null)
  const getUser = async () => {
    try {
      const response = await axios.get('https://mcontrol-api.onrender.com/user', {
        headers: {
          authorization: sessionStorage.getItem('token'),
        },
      })
      // console.log(response.data.data)
      setUserData(response.data.data)
      sessionStorage.setItem('id', response.data.data._id)
    } catch (e) {
      // console.log(e)
      toast.error('Oopss...Something went wrong...', {
        position: 'top-center',
        theme: 'dark',
      })
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      {userData ? (
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <img src={user} alt="User Profile" />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="row">Email : {userData.email}</div>
                <div className="row">Name : {userData.userName}</div>
                <div className="row">Age : "Will be assigned"</div>
                <div className="row">Target Age for Retirement : "Will be assigned"</div>
                <div className="row">Monthly target amount : "Will be assigned"</div>
                <div className="row">Current work : "Will be assigned"</div>
                <div className="row">Mobile : {userData.mobile}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // <p className="text-center">Something went wrong</p>
        <Loader />
      )}
    </>
  )
}

export default UserProfile
