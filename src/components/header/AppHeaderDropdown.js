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
  CNavLink,
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
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'

const AppHeaderDropdown = () => {
  const navigate = useNavigate('')
  const handleLogout = () => {
    let user = sessionStorage.getItem('user')
    confirmAlert({
      title: `${user}`,
      message: 'Are you sure to logout?',
      buttons: [
        {
          label: 'Logout',
          onClick: () => {
            sessionStorage.clear()
            navigate('/login')
            toast.success('Logged Out successfully', { position: 'top-center', theme: 'dark' })
          },
        },
        {
          label: 'Cancel',
          onClick: () => null,
        },
      ],
    })
  }
  return (
    <>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          <CAvatar src={avatar8} size="md" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">
            Account <br /> {sessionStorage.getItem('user')}
          </CDropdownHeader>
          {/* <CDropdownItem to="/notification" component={NavLink}>
            <CIcon icon={cilBell} className="me-2" />
            Notifications
            <CBadge color="success" className="ms-2">
              ON
            </CBadge>
          </CDropdownItem>
          <CDropdownItem to="/message" component={NavLink}>
            <CIcon icon={cilEnvelopeOpen} className="me-2" />
            Messages
            <CBadge color="success" className="ms-2">
              ON
            </CBadge>
          </CDropdownItem> */}
          <CDropdownItem href="#">
            <CIcon icon={cilTask} className="me-2" />
            Tasks
            {/* <CBadge color="danger" className="ms-2">
              42
            </CBadge> */}
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilCommentSquare} className="me-2" />
            Comments
            {/* <CBadge color="warning" className="ms-2">
              42
            </CBadge> */}
          </CDropdownItem>
          <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
          <CDropdownItem to="/user-profile" component={NavLink}>
            <CIcon icon={cilUser} className="me-2" />
            Profile
          </CDropdownItem>
          <CDropdownItem to="/settings" component={NavLink}>
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilCreditCard} className="me-2" />
            Payments
            {/* <CBadge color="secondary" className="ms-2">
              42
            </CBadge> */}
          </CDropdownItem>
          <CDropdownItem href="#">
            <CIcon icon={cilFile} className="me-2" />
            Projects
            {/* <CBadge color="primary" className="ms-2">
              42
            </CBadge> */}
          </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem onClick={handleLogout} style={{ cursor: 'pointer' }}>
            <CIcon icon={cilAccountLogout} className="me-2" />
            Log Out
            <CBadge color="success" className="ms-2">
              ON
            </CBadge>
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}

export default AppHeaderDropdown
