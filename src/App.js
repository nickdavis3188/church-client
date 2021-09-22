import React, { Component } from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import './scss/style.scss';
// import {ProtectedRoute} from './ProtectedRoute'
import ResetPassword  from './views/pages/passwordReset/resetPassword'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const ForgotPassword = React.lazy(() => import('./views/pages/forgotPassword/forgotPassword'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/signup" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/forgotP" name="ForgotPassword Page" render={props => <ForgotPassword {...props}/>} />
              <Route exact path="/resetPassword/:id" name="ResetPassword Page" render={props => <ResetPassword {...props}/>} />
              <Route path="/" name="Home" component={TheLayout} />
            
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
