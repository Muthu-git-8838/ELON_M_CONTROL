import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import {
//   CDropdown,
//   CDropdownItem,
//   CDropdownToggle,
//   CDropdownMenu,
//   CModal,
//   CButton,
//   CModalBody,
//   CModalHeader,
//   CModalTitle,

// } from '@coreui/react'

import { cibGoogle, cibFacebook, cibTwitter, cibLinkedin } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import {
  UrbanCoopFdRates,
  ForeignFdRates,
  GovtPoFdRates,
  PrivateFdRates,
  SmallFdRates,
  NbfcFdRates,
} from 'src/views/profile/fdrates'

import 'react-tabs/style/react-tabs.css'

import {
  BoardMeetings1,
  Agm1,
  Bonus1,
  Splits1,
  Rights1,
  Dividend1,
} from 'src/views/profile/configuartion/config'
import { toast } from 'react-toastify'
import Loader from 'src/views/profile/portfolio/Loader'

const Login = () => {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const [showTabs, setShowTabs] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

  const toggleTab = (tabIndex) => {
    setActiveTab(tabIndex)
  }

  const toggleTabs = () => {
    setShowTabs(!showTabs)
  }

  const [showTabs1, setShowTabs1] = useState(false)
  const [activeTab1, setActiveTab1] = useState(2)

  const toggleTab1 = (tabIndex1) => {
    setActiveTab1(tabIndex1)
  }

  const toggleTabs1 = () => {
    setShowTabs1(!showTabs1)
  }

  const [visible, setVisible] = useState(Array(12).fill(false))

  const toggleModal = (index) => {
    const visibleCopy = [...visible]
    visibleCopy[index] = !visibleCopy[index]
    setVisible(visibleCopy)
  }

  const navigate = useNavigate('')

  const getUser = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (validate()) {
      try {
        const response = await axios.post('https://mcontrol-api.onrender.com/login', {
          userName,
          password,
        })
        const r = response.data.accesToken
        // console.log(r)

        if (r) {
          toast.success('Login Successfully', {
            position: 'top-center',
            autoClose: 6000,
            theme: 'dark',
          })
          sessionStorage.setItem('token', r)
          sessionStorage.setItem('user', userName)
          // const randomId = Math.random().toString(36).substring(2)
          // sessionStorage.setItem('AuthID', randomId)
          navigate('/')
          setLoading(false)
        }
      } catch (error) {
        toast.error(error.response.data.error, { position: 'top-center', theme: 'dark' })
        // console.log(error)
        setLoading(false)
      }
    }
  }

  const validate = () => {
    let result = true
    let err_msg = 'Please Enter Your '
    if (userName === '' || userName === null) {
      result = false
      err_msg += 'User Name '
    }
    if (password === '' || password === null) {
      result = false
      err_msg += 'Password'
    }
    if (!result) {
      toast.warning(err_msg, {
        position: 'top-center',
        theme: 'dark',
      })
      setLoading(false)
    }

    return result
  }

  return (
    <div className="">
      <nav className="navbar navbar-expand " style={{ minWidth: '100vw' }}>
        <div className="container">
          <a href="/" className="navbar-brand text-white" style={{ marginLeft: 0 }}>
            {' '}
            Elon M-Control{' '}
          </a>

          <div
            className="container1"
            style={{ position: 'absolute', top: '50px', left: 0, right: 0, bottom: 0, zIndex: 999 }}
          >
            <button className="corporate-action-btn" onClick={toggleTabs}>
              CorporateActions 🠟
            </button>
            {showTabs && (
              <div className="container11">
                <div className="Board" style={{ paddingTop: '10px' }}></div>
                <div className="bloc-tabs">
                  <button
                    className={activeTab === 1 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(1)}
                  >
                    Board Meetings
                  </button>

                  <button
                    className={activeTab === 2 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(2)}
                  >
                    AGM/EGMs
                  </button>
                  <button
                    className={activeTab === 3 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(3)}
                  >
                    Bonus
                  </button>
                  <button
                    className={activeTab === 4 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(4)}
                  >
                    Splits
                  </button>
                  <button
                    className={activeTab === 5 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(5)}
                  >
                    Rights
                  </button>
                  <button
                    className={activeTab === 6 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(6)}
                  >
                    Dividend
                  </button>
                </div>

                <div className="content-tabs">
                  <div className={activeTab === 1 ? 'content active-content' : 'content'}>
                    <BoardMeetings1 />
                  </div>

                  <div className={activeTab === 2 ? 'content active-content' : 'content'}>
                    <Agm1 />
                  </div>

                  <div className={activeTab === 3 ? 'content active-content' : 'content'}>
                    <Bonus1 />
                  </div>

                  <div className={activeTab === 4 ? 'content active-content' : 'content'}>
                    <Splits1 />
                  </div>

                  <div className={activeTab === 5 ? 'content active-content' : 'content'}>
                    <Rights1 />
                  </div>

                  <div className={activeTab === 6 ? 'content active-content' : 'content'}>
                    <Dividend1 />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Corporate Actions */}

          <div
            className="container2"
            style={{ position: 'absolute', top: '50px', left: 0, right: 0, bottom: 0, zIndex: 999 }}
          >
            <button className="fd-btn" onClick={toggleTabs1}>
              FD Rates 🠟
            </button>
            {showTabs1 && (
              <div className="container11">
                <div className="Board" style={{ paddingTop: '10px' }}></div>
                <div className="bloc-tabs">
                  <button
                    className={activeTab1 === 7 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab1(7)}
                  >
                    Foreign Bank
                  </button>

                  <button
                    className={activeTab1 === 8 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab1(8)}
                  >
                    Govt Banks & Post Office
                  </button>
                  <button
                    className={activeTab1 === 9 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab1(9)}
                  >
                    Non-Banking Finance
                  </button>
                  <button
                    className={activeTab1 === 10 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab1(10)}
                  >
                    Private Bank
                  </button>
                  <button
                    className={activeTab1 === 11 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab1(11)}
                  >
                    Small Finance Bank
                  </button>
                  <button
                    className={activeTab1 === 12 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab1(12)}
                  >
                    Urban Co-Op Bank
                  </button>
                </div>

                <div className="content-tabs">
                  <div className={activeTab1 === 7 ? 'content active-content' : 'content'}>
                    <ForeignFdRates />
                  </div>

                  <div className={activeTab1 === 8 ? 'content active-content' : 'content'}>
                    <GovtPoFdRates />
                  </div>

                  <div className={activeTab1 === 9 ? 'content active-content' : 'content'}>
                    <NbfcFdRates />
                  </div>

                  <div className={activeTab1 === 10 ? 'content active-content' : 'content'}>
                    <PrivateFdRates />
                  </div>

                  <div className={activeTab1 === 11 ? 'content active-content' : 'content'}>
                    <SmallFdRates />
                  </div>

                  <div className={activeTab1 === 12 ? 'content active-content' : 'content'}>
                    <UrbanCoopFdRates />
                  </div>
                </div>
              </div>
            )}
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/register" className="text-white nav-link">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="login bg-light min-vh-100 d-flex flex-row align-items-center justify-content-center">
        {loading ? (
          <Loader />
        ) : (
          <form>
            <div className="form-floating m-3">
              <h2 className=" mb-4">Login to Elon M-Control</h2>
            </div>
            <div className="form-floating">
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="|+|"
              />
              <label> UserName</label>
            </div>
            <div className="form-floating mt-3">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="|+|"
              />
              <label>Password</label>
            </div>
            <div className="form-floating mt-3">
              <a href="/" className="text-dark forget">
                Forget password?
              </a>
            </div>
            <div className="">
              <button
                onClick={getUser}
                disabled={loading}
                className="btn btn-primary form-floating mt-2"
              >
                {loading ? 'PLEASE WAIT' : 'LOGIN'}
              </button>
            </div>
            <div className="social-media">
              <p className="text-center"> Or Login With</p>
              <ul>
                <li>
                  <a target="_blank" href="https://www.google.com/">
                    <CIcon
                      icon={cibGoogle}
                      className="me-2"
                      style={{ color: '#cc0000', cursor: 'pointer' }}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/">
                    <CIcon
                      icon={cibFacebook}
                      className="me-2"
                      style={{ color: '#0066ff', cursor: 'pointer' }}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://in.linkedin.com/">
                    <CIcon
                      icon={cibLinkedin}
                      className="me-2"
                      style={{ color: '#0066ff', cursor: 'pointer', fontSize: '50px' }}
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/">
                    <CIcon
                      icon={cibTwitter}
                      className="me-2"
                      style={{ color: '#1aa3ff', cursor: 'pointer' }}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="form-floating mt-3">
              <span>
                Are you a new user ?&nbsp;
                <a href="/register" className="forget">
                  &nbsp;click here&nbsp;
                </a>
                &nbsp;to signup
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Login
