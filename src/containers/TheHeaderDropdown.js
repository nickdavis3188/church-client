import React,{useEffect,useState} from 'react'
import { useHistory} from 'react-router-dom'
import {
  // CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg, 
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {FaUserLock} from "react-icons/fa"
import Auth from '../auth'
import baseUrl from '../config/config'

const TheHeaderDropdown = (props) => {
  const [resValue,setResValue] = useState({
    status:'',
    resBody:''
  })
  
  const history = useHistory()

  const logMeOut = ()=>{

    let token = JSON.parse(localStorage.getItem('Token'));

    fetch(`${baseUrl}/api/v1/auth/signout`,{
        method: 'POST',
        headers:{
          'authorization':`Bearer ${token}`
        } 
    })
    .then((res)=>res.json())
    .then((data)=>{ 
        console.log(data)
        if(data){
            if(data.status === 'success'){
              Auth.logOut()
              localStorage.removeItem('Token')
              history.push('/login')
            }  
        }
    })
    .catch((err)=>{
        if(err){
        console.log(err) 
        alert(err)
        }
    })
 
  }

  useEffect(()=>{
    let token = JSON.parse(localStorage.getItem('Token'));
async function load(){

const retval = await fetch(`${baseUrl}/api/v1/auth/checklog`,{
  method: 'GET',
  headers:{
    'authorization':`Bearer ${token}`
  } 
});
  const data = await retval.json()
  console.log('data22',data)
  if(data.status === 'success'){
    Auth.login()  
    setResValue({status:'success',resBody:data.data?data.data:''})  
  }else{
    if(data.status === 'fail'){
      Auth.logOut()
      //  window.location.reload()
    }else{
      if(data.status === 'error'){
        Auth.logOut()
        //  window.location.reload()
      }

    }
  }
}
load(); 

    // .catch((err)=>{
    //     if(err){
    //     console.log(err) 
    //     alert(err)
    //     }
    // }) 
  },[])
  // let history = useHistory()
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={resValue.resBody.photoUrl}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
       
        <CDropdownItem>
         <CIcon name="cil-settings"className="mfe-2" alt="Settings" />&nbsp;<h6 onClick={()=>history.push('/Journeysettings')}>Settings </h6>      
        </CDropdownItem>
    
        <CDropdownItem divider />
        <CDropdownItem>     
          <FaUserLock/>&nbsp;<h6 onClick={()=> logMeOut()}>LogOut</h6>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
