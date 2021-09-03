import React,{useState,useRef ,useEffect}from "react"
import {
    // CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CLabel,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

// import axios from 'axios';
import baseUrl from '../../../config/config'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const MemberRegistration = ()=>{
  const [fname,setFname] = useState(null)
  const [sname,seSname] = useState(null)
  const [address,setaddress] = useState(null)
  const [phone,setphone] = useState(null)
  const [email,setemail] = useState(null)
  const [regno,setregno] = useState(null)
  const [sex,setsex] = useState(null)
  const [dob,setdob] = useState(null)
  const [maristat,setmaristat] = useState(null)
  const [wedanny,setwedanny] = useState(null)
  const [ocupa,setocupa] = useState(null)
  const [busin,setbusin] = useState(null)
  const [exper,setexper] = useState(null)
  const [statu,setstatu] = useState(null)
  const [mtype,setmtype] = useState(null)
  const [datjo,setdatjo] = useState(null)
  const [datal,setdatal] = useState(null)
  const [m1,setm1] = useState(null)
  const [m2,setm2] = useState(null)
  const [m3,setm3] = useState(null)

  
  const dropMe=useRef(null)
  const dropDown2=useRef(null)
  useEffect(()=>{
    (dropDown2.current).onchange=(e)=>{
      console.log(e.target.options[e.target.options.selectedIndex].value)
      setsex(e.target.options[e.target.options.selectedIndex].value)
    }
  })

  useEffect(()=>{
    (dropMe.current).onchange=(e)=>{
      console.log(e.target.options[e.target.options.selectedIndex].value)
      setmaristat(e.target.options[e.target.options.selectedIndex].value)
    }
  })

  
 

 

  const submitForm = (e)=>{
    e.preventDefault()
    let formD = {
      FirstName:fname,
      Surname:sname,
      Address:address,
      PhoneNo:phone,
      Email:email,
      RegNumber:regno,
      Sex:sex,
      DOB:dob,
      MaritalStatus:maristat,
      WeddingAnniversary:wedanny,
      Ocupation:ocupa,
      Business:busin,
      Expertise:exper,
      Status:statu,
      MemberTypeName:mtype,
      DateJoinedTKA:datjo,
      ALTDate:datal,
      Minstry1:m1,
      Ministry2:m2,
      Ministry3:m3,
    }
    console.log(formD)
    let token = JSON.parse(localStorage.getItem('Token'));
    let mydata = JSON.stringify(formD)
    fetch(`${baseUrl}/api/v1/member/memberRegistration`,{
        method: 'POST',
        body:mydata,
        headers:{
          "Content-Type":"application/json",
            // 'Content-Type': 'multipart/form-data',
          'authorization':`Bearer ${token}`
        }
    
    })
    .then((res)=>res.json())
    .then((data)=>{ 
        console.log(data)
        if(data){
            if(data.status === 'success'){
              return toast('Upload successful')
            }else{
                if(data.status === 'fail'){
                  return toast(data.message?data.message:'')
                }else{
                    if(data.status === 'error'){
                      return toast(data.message?data.message:'')
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
        <h3>Member registration</h3>
        <CCard>
        <CCardHeader>
          Membership
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-fName">First Name</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="text" class="form-control" id="hf-fName" placeholder="Enter First Name..." onChange={(e)=> setFname(e.target.value)} />
                <CFormText className="help-block">Please enter member first name</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="Surname">Surname</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="text" class="form-control" id="Surname" placeholder="Enter Surname..." onChange={(e)=> seSname(e.target.value)} />
                <CFormText className="help-block">Please enter member Surname</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-Address">Address</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="text" class="form-control" id="hf-Address" placeholder="Enter Address..." onChange={(e)=> setaddress(e.target.value)} />
                <CFormText className="help-block">Please enter member Address</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-PhoneNo">PhoneNo</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="number" class="form-control" id="hf-PhoneNo" placeholder="Enter PhoneNo..." onChange={(e)=> setphone(e.target.value)} />
                <CFormText className="help-block">Please enter member PhoneNo</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-Email">Email</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="email" className="form-control" id="hf-Email" placeholder="Enter Email..." onChange={(e)=> setemail(e.target.value)} />
                <CFormText className="help-block">Please enter member Email</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-RegNumber">RegNumber</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="text" className="form-control" id="hf-RegNumber" placeholder="Enter RegNumber..." onChange={(e)=> setregno(e.target.value)} />
                <CFormText className="help-block">Please enter member RegNumber</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hr-sex">Sex</CLabel>
              </CCol>
              <CCol  md="5">
                <select class="form-control"  ref={dropDown2}>
                  <option value='0'>Select</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
                <CFormText className="help-block">Please select member Sex</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="date-input">DOB</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="date" id="date-input" name="dob" className="form-control" onChange={(e)=>setdob(e.target.value)}/>
                <CFormText className="help-block">Please enter member Date Of Birth</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-MaritalStatus">Marital Status</CLabel>
              </CCol>
              <CCol  md="5">
                <select className="form-control" ref={dropMe}     >
                  <option value="0">Please select</option>
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                </select>
                <CFormText className="help-block">Please select member Marital Status</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-Surname">Wedding Anniversary</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="date" id="hf-WeddingAnniversary" name="hf-Wedding Anniversary" className="form-control" onChange={(e)=> setwedanny(e.target.value)} />
                <CFormText className="help-block">Please enter member Wedding Anniversary</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-Occupation">Occupation</CLabel>
              </CCol>
              <CCol  md="5">
                <input id="hf-Occupation" className="form-control" name="hf-Occupation" placeholder="Enter Occupation..." onChange={(e)=> setocupa(e.target.value)} />
                <CFormText className="help-block">Please enter member Occupation</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-Business">Business</CLabel>
              </CCol>
              <CCol  md="5">
                <input className="form-control" id="hf-Business" name="hf-Business" placeholder="Enter Business..." onChange={(e)=> setbusin(e.target.value)}/>
                <CFormText className="help-block">Please enter member Business</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-fName">Expertise</CLabel>
              </CCol>
              <CCol  md="5">
                <input className="form-control" id="hf-Expertise" name="hf-Expertise" placeholder="Enter Expertise..." onChange={(e)=> setexper(e.target.value)} />
                <CFormText className="help-block">Please enter member Expertise</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-DateJoinedTKA">Date Joined TKA</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="date" className="form-control" id="date-DateJoinedTKA" name="hr-DateJoinedTKA" placeholder="DateJoinedTKA.." onChange={(e)=> setdatjo(e.target.value)} />
                <CFormText className="help-block">Please enter DateJoinedTKA</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-fName">ALTDate</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="date" className="form-control" id="date-ALTDate" name="hr-ALTDate" placeholder="ALTDate.." onChange={(e)=> setdatal(e.target.value)} />
                <CFormText className="help-block">Please enter member ALTDate</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-fName">Status</CLabel>
              </CCol>
              <CCol  md="5">
              <input  className="form-control" id="date-ALTDate" name="hr-ALTDate" placeholder="ALTDate.." onChange={(e)=> setstatu(e.target.value)} />
                <CFormText className="help-block">Please enter member Status</CFormText>
              </CCol>
            </CFormGroup>
          
            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-Occupation">MinistryId 1</CLabel>
              </CCol>
              <CCol  md="5">
                <input id="hf-Occupation" className="form-control" name="hf-Occupation" placeholder="Enter Ministry 1..." onChange={(e)=> setm1(e.target.value)} />
                <CFormText className="help-block">Please enter member Ministry</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-Business">MinistryId 2</CLabel>
              </CCol>
              <CCol  md="5">
                <input className="form-control" id="hf-Business" name="hf-Business" placeholder="Enter Ministry 2..." onChange={(e)=> setm2(e.target.value)}/>
                <CFormText className="help-block">Please enter member Ministry</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-Business">MinistryId 3</CLabel>
              </CCol>
              <CCol  md="5">
                <input className="form-control" id="hf-Business" name="hf-Business" placeholder="Enter Ministry 3..." onChange={(e)=> setm3(e.target.value)}/>
                <CFormText className="help-block">Please enter member Ministry</CFormText>
              </CCol>
              <CCol md="1">
                <CLabel htmlFor="hf-Business">Member Type Name</CLabel>
              </CCol>
              <CCol  md="5">
                <input className="form-control" id="hf-Business" name="hf-Business" placeholder="Enter MemberTypeName..." onChange={(e)=> setmtype(e.target.value)}/>
                <CFormText className="help-block">Please enter member MemberTypeName</CFormText>
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <button type="button" class="btn btn-primary"onClick={(e)=> submitForm(e)}><CIcon name="cil-scrubber"/>submit</button>
          <button type="reset" class="btn btn-danger" onClick={()=>{
            window.location.reload()
          } } ><CIcon name="cil-ban" /> Reset</button>
            <ToastContainer/>
        </CCardFooter>
      </CCard>
      </>
    )
}

export default MemberRegistration