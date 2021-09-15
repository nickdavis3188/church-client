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

  const [resValue,setResValue] = useState(null)

  // const loadData = async ()=>{
  //   
  //   let res =  await fetch(,)
  //    const data = await res.json()
  //    console.log(data.data.total) 
  //   if(data){
  //       if(data.status === 'success'){
  //         setResValue('success')
          
  //         return toast('User Active')
  //       }else{
  //           if(data.status === 'fail'){
  //             return toast(data.message?data.message:'')
  //           }else{
  //               if(data.status === 'error'){
  //                 return toast(data.message?data.message:'')
  //               }
  //           }
  
  //       } 
    
  //   }
  // }

  useEffect(()=>{
    async function loadfun(){
      let token = JSON.parse(localStorage.getItem('Token'));
      const reval = await fetch(`${baseUrl}/api/v1/auth/checklog`,{
          method: 'GET',
            headers:{
              'authorization':`Bearer ${token}`
            }
          } 
        )
        const data = await reval.json()
        if(data.status === 'success'){
          setResValue('success')  
          return auth.login()  
        }else{
          if(data.status === 'fail'){
            auth.logOut()
          setResValue('fail')         

            //  window.location.reload()
          }else{
            if(data.status === 'error'){
              auth.logOut()
          setResValue('error')         

              //  window.location.reload()
            }

          }
        }
    }
    
    loadfun()
    // .then((res)=>res.json())
    // .then((data)=>{ 
    //     console.log(data)
    //     if(data){
    //         if(data.status === 'success'){
              
                  
    //         }else{
            
    //         } 
    //     }
    // })
    // .catch((err)=>{
    //     if(err){
    //     console.log(err) 
    //     alert(err)
    //     }
    // })

  },[])

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
                        
                        return (
                        auth.isAuthenticated() || resValue === 'success'
                        ?(
                          <CFade>
                            <route.component {...props} />
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
