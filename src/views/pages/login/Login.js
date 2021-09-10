import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import {
  Redirect,
  Switch,
  // withRouter
} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import auth from '../../../auth'


const Login = () => {
  const [loginValue,setLoinValue] = useState({
    email:'',
    password:'' 
  })
  const [resValue,setResValue] = useState({
    status:'',
    resBody:''
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
              setResValue({status:'success',resBody:'Login successful'})    
              return toast('User still active')    
            }else{
              if(data.status === 'fail'){
                auth.logOut()
                //  window.location.reload()
              }else{
                if(data.status === 'error'){
                  auth.logOut()
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

  let myData =JSON.stringify( {
    email:loginValue.email,
    password:loginValue.password
  })


  const loginApp =(e)=>{

   
    e.preventDefault()

      fetch(`${baseUrl}/api/v1/auth//signin`,{
        method: 'POST',
        body: myData,
        headers:{
              "Content-Type":"application/json",
              // 'Content-Type': 'multipart/form-data',
          }
      })
      .then((res)=>res.json())
      .then((data)=>{ 
        console.log(data)
        if(data){
          if(data.status === 'fail'){
            return toast(data.message?data.message:'')
          }

          if(data.token){
            let token = JSON.stringify(data.token)
            localStorage.setItem('Token',token)
            auth.login()
            setResValue({status:'success',resBody:'Login successful'})
            return toast('Login successful')
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

  let actionFromRes = resValue.status === 'success'?<Switch><Redirect from='/login' to='/dashboard'/></Switch>:''
  
  // <Toster body={resValue.resBody}/>
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input type="email" className="form-control" id="inlineFormInputGroupUsername1" placeholder="Email" onChange={(e)=>setLoinValue({...loginValue,email:e.target.value})}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input type="password" className="form-control" id="inlineFormInputGroupUsername3" placeholder="Password" onChange={(e)=> setLoinValue({...loginValue,password:e.target.value})}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <button className="btn btn-primary px-4"  onClick={(e)=>loginApp(e)} >Login</button>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <a href="/forgotP">Forgot password?</a>
                        {/* <CButton color="link" className="px-0"></CButton> */}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 " style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Hello, welcome to Kings Assembly Members Management System, if you are new hear please kindly click the register button</p>
                    <Link to="/signup">
                      <CButton color="primary" className="mt-3" active tabIndex={-1} >Register Now!</CButton>
                    </Link>
                  </div>
                    {actionFromRes}
                  <ToastContainer/>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
 
  )
  }
//{/* <Redirect from="/login" to="/" /> */}

// const Toster = (props)=>{
//   return(
//     <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
//       <div className="toast-header">
//         {props.status}
//         <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="toast-body">
//         {props.body}
//       </div>
//     </div>
//   )
// }
// const Toster2 = (props)=>{
//   return(
//     <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
//       <div className="toast-header">
//         success
//         <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="toast-body">
//         user successfully login
//       </div>
//     </div>
//   )
// }

 //   axios({
    //     method: 'post',
    //     url: ,
    //     data, 
    //     headers:{
    //         "Content-Type":"application/json",
    //         // 'Content-Type': 'multipart/form-data',
    //     }
        
    // })
    //   .then((e)=>{
    //     if(e.data.status === 'success'){
    //       alert('login successful')
    //       localStorage.setItem(('Token',e.data.token))
    //       setResValue({response:'success',resBody:'Login successful'})
         
    //     }
    //   })
    //   .catch((er)=>alert(er.message))
export default Login
