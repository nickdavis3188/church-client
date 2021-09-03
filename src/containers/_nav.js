import React from 'react'
// import CIcon from '@coreui/icons-react'
import {FaBullhorn,FaJournalWhills,FaUserAlt,FaAllergies,FaBookmark,FaReceipt,FaRoad,FaFileUpload} from "react-icons/fa"
import {IoSpeedometerSharp } from "react-icons/io5";
import {ImUsers} from "react-icons/im";
import {GiPlayerTime} from "react-icons/gi";

const _nav =  [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Members Dashboard']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <IoSpeedometerSharp className="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },//cil-speedometer cil-bullhorn
 
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Activities']
  },
  {
      _tag: 'CSidebarNavDropdown',
      name: 'Conference',
      route: '/conference',
      icon: <FaBullhorn className="c-sidebar-nav-icon"/>,
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Conference1',
          to: '/conference/conference1',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Conference2',
          to: '/conference/conference2',
        },
      ],
    },

  {
      _tag: 'CSidebarNavDropdown',
      name: 'Programs',
      route: '/program',
      icon: <FaJournalWhills className="c-sidebar-nav-icon"/>,
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Program1',
          to: '/program/program1',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Program2',
          to: '/program/program2',
        },
      ],
    },

    {
      _tag: 'CSidebarNavTitle',
      _children: ['Upload']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Bulk Upload',
      to: '/bulkUpload',
      icon: <FaFileUpload className="c-sidebar-nav-icon"/>
    },
    {
      _tag: 'CSidebarNavTitle',
      _children: ['Registration']
    },
  {
    _tag: 'CSidebarNavItem',
    name: 'Register Members',
    to: '/register/members',
    icon:<ImUsers className="c-sidebar-nav-icon"/>
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Register ALT',
    to: '/register/alt',
    icon:<FaUserAlt className="c-sidebar-nav-icon"/> 
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Register Journey',
    to: '/register/journey',
    icon:<FaRoad className="c-sidebar-nav-icon"/> 
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Attendance']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Attendance',
    to: '/attendance',
    icon: <FaAllergies className="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'First Timer',
    to: '/attendance/ft',
    icon: <GiPlayerTime className="c-sidebar-nav-icon"/>
 
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Plans']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Budget',
    route: '/plan/budget',
    icon: <FaBookmark className="c-sidebar-nav-icon"/>,
 
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/base/carousels',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Ministries IKPI',
    to: 'plan/ikpi',
    icon: <FaReceipt className="c-sidebar-nav-icon"/>
  },
  //
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: 'cil-chart-pie'
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Toaster',
  //       to: '/notifications/toaster'
  //     }
  //   ]
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
