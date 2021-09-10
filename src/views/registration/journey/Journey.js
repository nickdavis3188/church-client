import React,{useState} from "react"
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    // CCollapse,
    // CDropdownItem,
    // CDropdownMenu,
    // CDropdownToggle,
    // CFade,
    CForm,
    CFormGroup,
    CFormText,
    // CValidFeedback,
    // CInvalidFeedback,
    CTextarea,
    CInput,
    // CInputFile,
    // CInputCheckbox,
    // CInputRadio,
    // CInputGroup,
    // CInputGroupAppend,
    // CInputGroupPrepend,
    // CDropdown,
    // CInputGroupText,
    CLabel,
    // CSelect,
    // CRow,
    // CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import baseUrl from '../../../config/config'

const Journey = ()=>{
  const [name,setName] = useState(null)
  const [priority,setPriority] = useState(null)

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
        <p><h6>Note:</h6> The Journey Priority must be in a sequence i.e 1,2,3,4,5</p>
        <p> eg 1 for Journey 101, 2 for Journey 201 ... </p>
        <p> Also include Journey Priority of 6 with a Journey name 'Done' </p>
        <p> This helps the admin to know if a member is done with the whole journey .</p>
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-JourneyName">Journey Name</CLabel>
              </CCol>
              <CCol  md="5">
                <input id="hf-JourneyName" name="hf-JourneyName" placeholder="Enter JourneyName..." onChange={(e)=> setName(e.target.value)}/>
                <CFormText className="help-block">Please enter your Journey Name</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-JourneyPriority">Journey Priority</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="number" id="hf-JourneyPriority" name="hf-JourneyName" placeholder="Enter JourneyName..."onChange={(e)=> setPriority(e.target.value)} />
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
          <button type="submit" size="sm" color="primary" onClick={(e)=>submitJourney(e)}><CIcon name="cil-scrubber" /> Submit</button> 
          <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
        <ToastContainer/>
      </CCard>
      </>
    )
}
export default Journey