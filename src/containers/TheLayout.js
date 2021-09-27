import React,{useState,useEffect} from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import baseUrl from '../config/config'

const TheLayout = () => {
  const [user,setUser] = useState('')


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
          setUser(data.data?data.data:'')
        }else{
          if(data.status === 'fail'){
            console.log(data.data?data.data:'')
          }
        }
    }
    
    loadfun()
 
  },[])
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader User={user}/>
        <div className="c-body">
          <TheContent User={user}/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
