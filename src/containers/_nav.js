import React from 'react'
// import CIcon from '@coreui/icons-react'
import {FaFileUpload} from "react-icons/fa"
import {IoSpeedometerSharp,IoSettings } from "react-icons/io5";
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
    _children: ['Member']
  },
 {
  _tag: 'CSidebarNavItem',
  name: 'Members',
  to: '/members',
  icon:<ImUsers className="c-sidebar-nav-icon"/>
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
    _children: ['Settings']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Settings',
    to: '/Journeysettings',
    icon: <IoSettings className="c-sidebar-nav-icon"/>
  },
]
export default _nav
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Activities']
  // },
  // {
  //     _tag: 'CSidebarNavDropdown',
  //     name: 'Conference',
  //     route: '/conference',
  //     icon: <FaBullhorn className="c-sidebar-nav-icon"/>,
  //     _children: [
  //       {
  //         _tag: 'CSidebarNavItem',
  //         name: 'Conference1',
  //         to: '/conference/conference1',
  //       },
  //       {
  //         _tag: 'CSidebarNavItem',
  //         name: 'Conference2',
  //         to: '/conference/conference2',
  //       },
  //     ],
  //   },

  // {
  //     _tag: 'CSidebarNavDropdown',
  //     name: 'Programs',
  //     route: '/program',
  //     icon: <FaJournalWhills className="c-sidebar-nav-icon"/>,
  //     _children: [
  //       {
  //         _tag: 'CSidebarNavItem',
  //         name: 'Program1',
  //         to: '/program1',
  //       },
  //       {
  //         _tag: 'CSidebarNavItem',
  //         name: 'Program2',
  //         to: '/program2',
  //       },
  //     ],
  //   },

    // {
    //   _tag: 'CSidebarNavTitle',
    //   _children: ['Upload']
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Bulk Upload',
    //   to: '/bulkUpload',
    //   icon: <FaFileUpload className="c-sidebar-nav-icon"/>
    // },
  

//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Register ALT',
//     to: '/alt',
//     icon:<FaUserAlt className="c-sidebar-nav-icon"/> 
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Register Journey',
//     to: '/journey',
//     icon:<FaRoad className="c-sidebar-nav-icon"/> 
//   },
//   {
//     _tag: 'CSidebarNavTitle',
//     _children: ['Attendance']
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Attendance',
//     to: '/attendance',
//     icon: <FaAllergies className="c-sidebar-nav-icon"/>
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'First Timer',
//     to: '/ft',
//     icon: <GiPlayerTime className="c-sidebar-nav-icon"/>
 
//   },
//   {
//     _tag: 'CSidebarNavTitle',
//     _children: ['Plans']
//   },
//   {
//     _tag: 'CSidebarNavDropdown',
//     name: 'Budget',
//     route: '/budget',
//     icon: <FaBookmark className="c-sidebar-nav-icon"/>,
 
//     _children: [
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Breadcrumb',
//         to: '/breadcrumbs',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Cards',
//         to: '/cards',
//       },
//       {
//         _tag: 'CSidebarNavItem',
//         name: 'Carousel',
//         to: '/carousels',
//       }
//     ],
//   },
//   {
//     _tag: 'CSidebarNavItem',
//     name: 'Ministries IKPI',
//     to: '/ikpi',
//     icon: <FaReceipt className="c-sidebar-nav-icon"/>
//   },
 
//   {
//     _tag: 'CSidebarNavDivider',
//     className: 'm-2'
//   }
// ]


