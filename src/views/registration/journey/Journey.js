import React,{useState} from "react"
import {
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import baseUrl from '../../../config/config'

const Journey = ()=>{
  const [name,setName] = useState('')
  const [priority,setPriority] = useState('')

  const submitJourney = (e)=>{

    e.preventDefault()

    let mydata = JSON.stringify({JourneyName:name,JourneyPriority:priority})
    fetch(`${baseUrl}/api/v1/journey/journey`,{
          method: 'POST',
          body:mydata ,
          headers:{
            "Content-Type":"application/json",
          }
      })
    .then((res)=>res.json())
    .then((data)=>{
      if(data){
        if(data.status === 'success'){
          return toast('Registration successful')
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

    return(
        <>
        <h3>Journey </h3>
        <CCard>
        <CCardHeader>
        Journey
          <small> Form</small>
        </CCardHeader>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>
            <span><strong>Note:</strong> The Journey Priority must be in a sequence i.e 1,2,3,4,5</span>
            <span> eg 1 for Journey 101, 2 for Journey 201 ... </span>
            <span> Also include Journey Priority of 6 with a Journey name 'Done' </span>
            <span> This helps the admin to know if a member is done with the whole journey .</span>
          </strong> 
        </div>
      
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-JourneyName">Journey Name</CLabel>
              </CCol>
              <CCol  md="5">
                <input id="hf-JourneyName" value={name}  placeholder="Enter JourneyName..." onChange={(e)=> setName(e.target.value)}/>
                <CFormText className="help-block">Please enter your Journey Name</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-JourneyPriority">Journey Levle</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="number" value={priority} id="hf-JourneyPriority"  placeholder="Enter JourneyPriority..."onChange={(e)=> setPriority(e.target.value)} />
                <CFormText className="help-block">Please enter your Journey Priority</CFormText>
              </CCol>
            </CFormGroup>
            {/* <CFormGroup>
                <CCol md="12">
                    <h5>Task For The Journey</h5>
                </CCol>
            </CFormGroup> */}
          </CForm>
        </CCardBody>
        <CCardFooter>
          <button type="submit" size="sm" className="btn btn-primary" onClick={(e)=>submitJourney(e)}><CIcon name="cil-scrubber" /> Submit</button> 
          <button type="reset" size="sm" className="btn btn-danger" onClick={(e)=>{
            e.preventDefault()
            setPriority('')
            setName('')
          
          
          }}><CIcon name="cil-ban" /> Reset</button>
        </CCardFooter>
        <ToastContainer/>
      </CCard>
      </>
    )
}
export default Journey