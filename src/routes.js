import React from 'react';



const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const ConferenceOne = React.lazy(() => import("./views/Activities/Conference/Conference1"))
const ConferenceTwo = React.lazy(() => import("./views/Activities/Conference/Conference2"))

const ProgramOne = React.lazy(() => import("./views/Activities/programs/Program1"))
const ProgramTwo = React.lazy(() => import("./views/Activities/programs/Program2"))

const MemberRegistration = React.lazy(()=> import("./views/registration/member/MemberRegistration"))
const AltRegistration = React.lazy(()=> import("./views/registration/alt/AltRegistration"))
const JourneyRegistration = React.lazy(()=> import("./views/registration/journey/Journey"))

const BuldUpload = React.lazy(()=> import("./views/registration/bulkUpload/bulkUpload"))

const Attendance = React.lazy(()=> import("./views/journeyAttendance/Attendance"))

// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  {path: '/conference', name: 'Conference', component:ConferenceOne, exact:true },
  {path: '/conference/conference1', name: 'Conference1', component:ConferenceOne },
  {path: '/conference/conference2', name: 'Conference2', component:ConferenceTwo },
  {path: '/program', name: 'Programs', component:ProgramOne, exact:true },
  {path: '/program/program1', name: 'Programs1', component:ProgramOne },
  {path: '/program/program2', name: 'Programs2', component:ProgramTwo },
  {path: '/register', name: 'Registration', component:MemberRegistration, exact:true },
  {path: '/members', name: 'Register Members', component:MemberRegistration },
  {path: '/register/alt', name: 'Register ALT', component:AltRegistration },
  {path: '/register/journey', name: 'Register Journey', component:JourneyRegistration },
  {path: '/attendance', name: 'Journey Attendance',exact: true, component:Attendance },
  {path: '/bulkUpload', name: 'Bulk Upload', component:BuldUpload},
 
];

export default routes;
