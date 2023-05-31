import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDollar,
  cilPowerStandby,
  cilFingerprint,
  cilBug,
  cilApps,
  cilAt,
  cilViewModule,
  cilAppsSettings,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Home',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Profile',
  },
  {
    component: CNavGroup,
    name: 'Configuration',
    to: '/admin-configuration',
    icon: <CIcon icon={cilFingerprint} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Admin Configuration',
        to: '/admin-configuration',
      },
      {
        component: CNavItem,
        name: 'Stock Configuration',
        to: '/stock-configuration',
      },
      {
        component: CNavItem,
        name: 'Mutual Funds Configuration',
        to: '/mutualfunds-configuration',
      },
      {
        component: CNavItem,
        name: 'Corporate Actions',
        to: '/Corporate-Actions',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'F D Rates',
    to: '/fdrates',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Foreign Bank',
        to: '/foreignbank',
      },
      {
        component: CNavItem,
        name: 'Govt & Post Office Banks',
        to: '/govtpobank',
      },
      {
        component: CNavItem,
        name: 'Non-Banking FC',
        to: '/nbfc',
      },
      {
        component: CNavItem,
        name: 'Private Bank',
        to: '/pvtbank',
      },
      {
        component: CNavItem,
        name: 'Small Finance Bank',
        to: '/smfbank',
      },
      {
        component: CNavItem,
        name: 'Urban Co-Op Bank',
        to: '/coopbank',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Portfolio  Manage',
    icon: <CIcon icon={cilAppsSettings} customClassName="nav-icon" />,

    to: '/profile/portfolio',

    items: [
      {
        component: CNavItem,
        name: 'Overall PortFolio',
        to: '/portfolio',
      },
      {
        component: CNavItem,
        name: 'Stocks',
        to: '/stocks',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Mutual Funds',
        to: '/mf',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Bond',
        to: '/bond',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Gold',
        to: '/gold',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Gold SGB',
        to: '/gold-sgb',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Chit Fund',
        to: '/cf',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Post office',
        to: '/po',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Landing',
        to: '/landing',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
    ],
  },

  // {
  //   component: CNavItem,
  //   name: 'Analysis',
  //   to: '/profile/analysis',
  //   icon: <CIcon icon={cilBug} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Form Sheet',
  //   to: '/profile/form',
  //   icon: <CIcon icon={cilViewModule} customClassName="nav-icon" />,
  // },

  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  // {
  // component: CNavGroup,
  // name: 'My  Plans',
  // to: '/base',
  // icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  // items: [
  //   {
  //     component: CNavItem,
  //     name: 'Accordion',
  //     to: '/base/accordion',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Breadcrumb',
  //     to: '/base/breadcrumbs',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Cards',
  //     to: '/base/cards',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Carousel',
  //     to: '/base/carousels',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Collapse',
  //     to: '/base/collapses',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'List group',
  //     to: '/base/list-groups',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Navs & Tabs',
  //     to: '/base/navs',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Pagination',
  //     to: '/base/paginations',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Placeholders',
  //     to: '/base/placeholders',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Popovers',
  //     to: '/base/popovers',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Progress',
  //     to: '/base/progress',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Spinners',
  //     to: '/base/spinners',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Tables',
  //     to: '/base/tables',
  //   },
  //   {
  //     component: CNavItem,
  //     name: 'Tooltips',
  //     to: '/base/tooltips',
  //   },
  // ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  {
    component: CNavItem,
    name: 'Contact Us',
    to: '/contactus',
    icon: <CIcon icon={cilAt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilPowerStandby} customClassName="nav-icon" />,
  },
]

export default _nav
