import React, { Suspense, useEffect,useState } from 'react'
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
import auth from '../auth'
// import baseUrl from '../config/config'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = ({User}) => {


    return (
      <main className="c-main">
        <CContainer fluid>
          <Suspense fallback={loading}>
              <Switch>
                {routes.map((route, idx) => {
                    console.log('route',route)
                  return route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => {
                        
                        console.log('props',props)
                        console.log('User',User)
                        
                        return (
                        auth.isAuthenticated() || User.role === 'admin' || User.role === 'sub-admin'
                        ?(
                          <CFade>
                            <route.component {...props} User={User} />
                          </CFade>
                        )                  
                        :(
                          <Redirect to={{ pathname: "/login" }} />
                        )
                        
                      )}} 
                    />
                  )
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
          </Suspense>
        </CContainer>
      </main>
    )
}
// 
export default React.memo(TheContent)
