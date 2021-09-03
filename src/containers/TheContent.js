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
import baseUrl from '../config/config'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {

  const [resValue,setResValue] = useState({
    status:''
  })

  useEffect(()=>{
    let token = JSON.parse(localStorage.getItem('Token'));

    fetch(`${baseUrl}/api/v1/auth/checklog`,{
        method: 'GET',
        headers:{
          'authorization':`Bearer ${token}`
        } 
    })
    .then((res)=>res.json())
    .then((data)=>{ 
        console.log(data)
        if(data){
            if(data.status === 'success'){
              auth.login() 
              setResValue({status:'success'})         
            }else{
              if(data.status === 'fail'){
                auth.logOut()
              setResValue({status:'fail'})         

                //  window.location.reload()
              }else{
                if(data.status === 'error'){
                  auth.logOut()
              setResValue({status:'error'})         

                  //  window.location.reload()
                }

              }
            } 
        }
    })
    .catch((err)=>{
        if(err){
        console.log(err) 
        alert(err)
        }
    })

  },[])
  if(auth.isAuthenticated() ||resValue.status === 'success' ){
    return (
      <main className="c-main">
        <CContainer fluid>
          <Suspense fallback={loading}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        auth.isAuthenticated() || resValue.status === 'success'
                        ?(
                          <CFade>
                            <route.component {...props} />
                          </CFade>
                        )                  
                        :(
                          <Redirect to={{ pathname: "/login" }} />
                        )
                        
                      )} 
                    />
                  )
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
          </Suspense>
        </CContainer>
      </main>
    )

  }else{
   return(<Switch><Redirect from="/" to="/login" /></Switch>) 
  }
}

export default React.memo(TheContent)
