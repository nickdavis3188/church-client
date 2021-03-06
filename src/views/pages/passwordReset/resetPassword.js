import React,{useState} from 'react'
import { useHistory} from 'react-router-dom'

import {
  // CButton,
  CCard,
  CCardBody,
  // CCardGroup,
  CCol,
  CContainer,
  CForm,
  // CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  // CToaster,
  // CToast
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import baseUrl from '../../../config/config'
// import axios from 'axios';

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import auth from '../../../auth'


const Login = ({match}) => {
    const [pass,setPass] = useState(null)
    const [passConf,setPassConf] = useState(null)
  const history = useHistory()

  let myData =JSON.stringify( {
    password:pass,
    passwordConfirm:passConf
  })

  const changePassword =(e)=>{
    e.preventDefault()
      fetch(`${baseUrl}/api/v1/auth/resetPassword/${match.params.id}`,{
        method: 'POST',
        body: myData,
        headers:{
              "Content-Type":"application/json",
          }
      })
      .then((res)=>res.json())
      .then((data)=>{ 
        console.log(data)
        if(data.status ==='success'){
          toast('Password Reset Successful')
          history.push('/login')
        }else{
          if(data.status === 'fail'){
            return toast(data.message?data.message:'')
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

 
  
  // <Toster body={resValue.resBody}/>
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
              <CCard>
                <CCardBody>
                  <CForm>
                    <h1>Reset Password</h1>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input type="password" className="form-control" id="inlineFormInputGroupUsername1" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input type="password" className="form-control" id="inlineFormInputGroupUsername3" placeholder="PasswordConfirm" onChange={(e)=> setPassConf(e.target.value)}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <button className="btn btn-primary px-4"  onClick={(e)=>changePassword(e)} >Submit</button>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
          </CCol>
        </CRow>
        <ToastContainer/>
      </CContainer>
    </div>
 
  )
  }

export default Login