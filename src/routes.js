import React from 'react';

import JourneyEdit from "./views/Edit/journeyEdit"
import Attendance from "./views/journeyAttendance/Attendance"
import  MemberEdit from "./views/Edit/Edit"
import BuldUpload from "./views/registration/bulkUpload/bulkUpload"
import MemberInfo from "./views/Info/MemberInfo"
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
// const Users = React.lazy(() => import('./views/users/Users'));
// const User = React.lazy(() => import('./views/users/User'));

// const ConferenceOne = React.lazy(() => import("./views/Activities/Conference/Conference1"))
// const ConferenceTwo = React.lazy(() => import("./views/Activities/Conference/Conference2"))
const JourneySettings = React.lazy(()=> import("./views/Setttings/Setting"))

// const ProgramOne = React.lazy(() => import("./views/Activities/programs/Program1"))
// const ProgramTwo = React.lazy(() => import("./views/Activities/programs/Program2"))

const MemberRegistration = React.lazy(()=> import("./views/registration/member/MemberRegistration"))
// const AltRegistration = React.lazy(()=> import("./views/registration/alt/AltRegistration"))
const JourneyRegistration = React.lazy(()=> import("./views/registration/journey/Journey"))

const AdminInvite = React.lazy(()=> import("./views/registration/Invite/AdminInvite"))

const AdminManage = React.lazy(()=> import("./views/Manegement/Manage"))




// const Attendance = React.lazy(()=> import("./views/journeyAttendance/Attendance"))

// const MemberEdit = React.lazy(()=> import("./views/Edit/Edit"))
// const JourneyEdit = React.lazy(()=> import("./views/Edit/journeyEdit"))

// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {path: '/members',exact:true, name: 'Register Members', component:MemberRegistration },
  {path: '/Members/:id', name: 'Edit Member', component:MemberEdit},
  {path: '/journey',exact:true, name: 'Register Journey', component:JourneyRegistration },
  {path: '/journey/:id', name: 'Journey Attendance', component:Attendance },
  {path: '/info/:id', name: 'Member Info', component:MemberInfo },
  {path: '/bulkUpload',exact:true, name: 'Bulk Upload', component:BuldUpload},
  {path: '/Journeysettings',exact:true, name: 'Settings', component:JourneySettings},
  {path: '/Journeysettings/:id', name: 'Edit Journey', component:JourneyEdit},
  {path: '/inviteAdmin', name: 'Invite', component:AdminInvite},
  {path: '/manage', name: 'Invite', component:AdminManage},
  // {path: '/register', name: 'Registration', component:MemberRegistration,  },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User },
  // {path: '/conference', name: 'Conference', component:ConferenceOne, exact:true },
  // {path: '/conference1', name: 'Conference1', component:ConferenceOne },
  // {path: '/conference2', name: 'Conference2', component:ConferenceTwo },
  // {path: '/program', name: 'Programs', component:ProgramOne, exact:true },
  // {path: '/program1', name: 'Programs1', component:ProgramOne },
  // {path: '/program2', name: 'Programs2', component:ProgramTwo },
  // {path: '/alt', name: 'Register ALT', component:AltRegistration },
 
];

export default routes;
