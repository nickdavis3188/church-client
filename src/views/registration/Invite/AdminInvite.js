import React,{useState} from 'react';

import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
// import axios from 'axios';
import baseUrl from '../../../config/config'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const InviteAdmin = () => {
  let formdata = new FormData()
    const [inputUserName,setUserName] = useState(null)
    const [inputEmail,setEmails] = useState(null)
    const [inputPassword,setPassword] = useState(null)
    const [inputPasswordConfirm,setPasswordConfirm] = useState(null)
    const [file,setFile] = useState(null)
    

   
  formdata.append('fullName',inputUserName)
  formdata.append('email',inputEmail)
  formdata.append('password',inputPassword)
  formdata.append('passwordConfirm',inputPasswordConfirm)
  formdata.append('adminImg',file)
  
    const submitForm = (e)=>{
      e.preventDefault()
      fetch(`${baseUrl}/api/v1/auth/inviteSignup`,{
        method: 'POST',
        body: formdata     
      })
      .then((res)=>res.json())
      .then((data)=>{
        if(data){
          if(data.status === 'success'){
            return toast('Invite successful')
          }else{
            if(data.message){
              return toast(data.message)
            }else{
              if(data.data.message){
                return toast(data.data.message)
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
    }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">   
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={(e)=>submitForm(e)}>
                  <h1>Sub-Admin Invitation</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text"> <CIcon name="cil-user" /></div>
                      </div>
                      <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" onChange={(e)=> setUserName(e.target.value)}/>
                    </div>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                  <label className="sr-only" for="inlineFormInputGroupUsername1">email</label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input type="email" className="form-control" id="inlineFormInputGroupUsername1" placeholder="Email" onChange={(e)=> setEmails(e.target.value)}/>
                    </div>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                  <label className="sr-only" for="inlineFormInputGroupUsername3">password</label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><CIcon name="cil-lock-locked" /></div>
                      </div>
                      <input type="password" className="form-control" id="inlineFormInputGroupUsername3" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                  <label className="sr-only" for="inlineFormInputGroupUsername4">password confirm</label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><CIcon name="cil-lock-locked" /></div>
                      </div>
                      <input type="password" className="form-control" id="inlineFormInputGroupUsername4" placeholder="Confirm Password" onChange={(e)=> setPasswordConfirm(e.target.value)}/>
                    </div>
                  </CInputGroup>                   
                  <CInputGroup className="mb-4">
                  <label className="sr-only" for="inlineFormInputGroupUsername4">passport (optional)</label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><CIcon name="cil-lock-locked" /></div>
                      </div>
                      <input type="file" className="form-control" id="inlineFormInputGroupUsername4" onChange={(e)=>setFile(e.target.files[0])
                    }/>
                    </div>
                  </CInputGroup>                   
                
                <button type="submit" className="btn btn-secondary btn-lg btn-block">Invite</button> 
                   
                </CForm>
                <ToastContainer/>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default InviteAdmin 

