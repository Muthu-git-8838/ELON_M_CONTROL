import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilAccountLogout,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/10.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'

const AppHeaderDropdown = () => {
  const navigate = useNavigate('')
  // const handleLogout = async () => {
  // let user = sessionStorage.getItem('user')
  // let confirmed = confirm(`Are You sure to logout from ${user}?`)
  // if (confirmed) {
  //   sessionStorage.clear()

  //   navigate('/login')
  //   toast.success('Logged Out successfully', { position: 'top-center', theme: 'dark' })
  // }
  // }
  const handleLogout = () => {
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
    // confirmAlert({
    //   customUI: () => {
    //     return (
    //       <div className="card w-100">
    //         <h1>Are you sure?</h1>
    //         <p>You want to delete this file?</p>
    //         <button
    //           className="btn btn-success mx-3"
    //           onClick={() => {
    //             alert('Cancelled')
    //           }}
    //         >
    //           No
    //         </button>
    //         <button
    //           className="btn btn-danger"
    //           onClick={() => {
    //             alert('deleted')
    //           }}
    //         >
    //           Yes, Delete it!
    //         </button>
    //       </div>
    //     )
    //   },
    // })
  }
  return (
    <>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          <CAvatar src={avatar8} size="md" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilBell} className="me-2" />
            Updates
            <CBadge color="info" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilEnvelopeOpen} className="me-2" />
            Messages
            <CBadge color="success" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilTask} className="me-2" />
            Tasks
            <CBadge color="danger" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilCommentSquare} className="me-2" />
            Comments
            <CBadge color="warning" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
          <CDropdownItem href="#">
            <CIcon icon={cilUser} className="me-2" />
            Profile
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilCreditCard} className="me-2" />
            Payments
            <CBadge color="secondary" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilFile} className="me-2" />
            Projects
            <CBadge color="primary" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem onClick={handleLogout} style={{ cursor: 'pointer' }}>
            <CIcon icon={cilAccountLogout} className="me-2" />
            Log Out
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}

export default AppHeaderDropdown
