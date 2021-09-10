import React,{useEffect,useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  // CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CLink 
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
              window.location.reload()
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
    })
    .catch((err)=>{
        if(err){
        console.log(err) 
        alert(err)
        }
    })
  })
  let history = useHistory()
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
        {/* <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Updates
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
          Tasks
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem> */}
        {/* <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem> */}
        <CDropdownItem>
          <CLink className="c-subheader-nav-link" href="/Journeysettings">
              <CIcon name="cil-settings"className="mfe-2" alt="Settings" />&nbsp;Settings
          </CLink>        
        </CDropdownItem>
        {/* <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" />
          Projects
          <CBadge color="primary" className="mfs-auto">42</CBadge>
        </CDropdownItem> */}
        <CDropdownItem divider />
        <CDropdownItem>
          <CLink className="c-subheader-nav-link" href="/login">
              <FaUserLock/>&nbsp;<h6 onClick={()=> logMeOut()}>LogOut</h6>
          </CLink>  
          {/* Lock Account
          <CIcon name="cil-lock-locked" className="mfe-2" /> */}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
