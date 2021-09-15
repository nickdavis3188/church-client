import React,{useState,useEffect,useRef }from "react"
// import { useHistory, useLocation } from 'react-router-dom'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import baseUrl from '../../config/config'
import {
    CFormGroup,
    CFormText,
    CLabel,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CForm,
    CCardFooter
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
// import {GiUpgrade} from "react-icons/gi"
const EditMember = ({match})=>{
    // let mydata = JSON.stringify({word:`${match.params.id}`}
    // /memberUpdate/:id

    const dropMe=useRef(null)
    const dropDown2=useRef(null)
    
    useEffect(()=>{
        (dropMe.current).onchange=(e)=>{
            console.log(e.target.options[e.target.options.selectedIndex].value)
            setMaritalStatus(e.target.options[e.target.options.selectedIndex].value)
        }

      
    },[])
    
    useEffect(()=>{
        (dropDown2.current).onchange=(e)=>{
            console.log(e.target.options[e.target.options.selectedIndex].value)
            setSex(e.target.options[e.target.options.selectedIndex].value)
        }
    },[])
    const [RegNumber,setRegNumber] = useState('')
    const [Firstname,setFirstname] = useState('')
    const [Surname,setSurname] = useState('')
    const [Address,setAddress] = useState('')
    const [PhoneNo,setPhoneNo] = useState('')
    const [Email,setEmail] = useState('')
    const [Sex,setSex] = useState('')
    const [Dob,setDob] = useState('')
    const [MaritalStatus,setMaritalStatus] = useState('')
    const [WeddingAnniversary,setWeddingAnniversary] = useState('')
    const [Occupation,setOccupation] = useState('')
    const [Business,setBusiness] = useState('')
    const [Expertise,setExpertise] = useState('')
    const [DateJoinedTKA,setDateJoinedTKA] = useState('')
    const [Id,setId] = useState('')

   
     

      useEffect(()=>{
        async function loadData(){
          let mydata = JSON.stringify({word:`${match.params.id}`})
          const redval = await fetch(`${baseUrl}/api/v1/member/getSingleMember`,{
              method: 'POST',
              body:mydata,
              headers:{
                "Content-Type":"application/json",
                  // 'Content-Type': 'multipart/form-data'
              }
          
          })
          const data = await redval.json()
          if(data.status === 'success'){
            if(data.data.length >= 1){
              console.log(data.data[0])
              setRegNumber(data.data[0].RegNumber?data.data[0].RegNumber:"")
              setFirstname(data.data[0].Firstname?data.data[0].Firstname:"")
              setSurname(data.data[0].Surname?data.data[0].Surname:"")
              setAddress(data.data[0].Address?data.data[0].Address:"")
              setPhoneNo(data.data[0].PhoneNo?data.data[0].PhoneNo:"")
              setEmail(data.data[0].Email?data.data[0].Email:"")
              setSex(data.data[0].Sex?data.data[0].Sex:"")
              setDob(data.data[0].Dob?data.data[0].Dob:"")
              setMaritalStatus(data.data[0].MaritalStatus?data.data[0].MaritalStatus:"")
              setWeddingAnniversary(data.data[0].WeddingAnniversary?data.data[0].WeddingAnniversary:"")
              setOccupation(data.data[0].Occupation?data.data[0].Occupation:"")
              setBusiness(data.data[0].Business?data.data[0].Business:"")
              setExpertise(data.data[0].Expertise?data.data[0].Expertise:"")
              setDateJoinedTKA(data.data[0].DateJoinedTKA?data.data[0].DateJoinedTKA:"")
              setId(data.data[0]._id?data.data[0]._id:"")

              dropDown2.current.value = data.data[0].Sex?data.data[0].Sex:""
              dropMe.current.value = data.data[0].MaritalStatus?data.data[0].MaritalStatus:""
            }
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

        loadData()
        
       
      },[])



        // if(Sex && MaritalStatus){
        //     console.log(Sex)
        //     console.log(MaritalStatus)
           
        // }


      

      const submitUpdate  = (e)=>{
          e.preventDefault()
            const myUpdate = {
                Firstname:Firstname,
                Surname:Surname,
                Address:Address,
                PhoneNo:PhoneNo,
                Email:Email,
                Sex:Sex,
                Dob:Dob,
                MaritalStatus:MaritalStatus,
                WeddingAnniversary:WeddingAnniversary,
                Occupation:Occupation,
                Business:Business,
                Expertise:Expertise,
                DateJoinedTKA:DateJoinedTKA      
              }
              console.log(myUpdate)
            let fullData = JSON.stringify(myUpdate)
          fetch(`${baseUrl}/api/v1/member/memberUpdate/${Id}`,{
            method: 'POST',
            body:fullData ,
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((data)=>{ 
            console.log(data)
            if(data){
                if(data.status === 'success'){      
                  return toast('Update Successful')
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


      const formatDate = (date)=>{
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
      }
     
    
    return(
        <>
        {/*  */}
        <CCard>
        <CCardHeader>
          Member Edit Form       
        </CCardHeader>
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
            <CCol md="1">
                <CLabel htmlFor="hf-RegNumber">RegNumber</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="text" value={RegNumber} className="form-control" id="hf-RegNumber" placeholder="Enter RegNumber..." onChange={(e)=> setRegNumber(e.target.value)} />
                <CFormText className="help-block">Please enter member RegNumber</CFormText>
              </CCol>
              <CCol md="1">
                <CLabel htmlFor="Surname">Surname</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="text" value={Surname} className="form-control" id="Surname" placeholder="Enter Surname..." onChange={(e)=> setSurname(e.target.value)} />
                <CFormText className="help-block">Please enter member Surname</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
            <CCol md="1">
                <CLabel htmlFor="hf-fName">First Name</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="text" value={Firstname} className="form-control" id="hf-fName" placeholder="Enter First Name..." onChange={(e)=> setFirstname(e.target.value)} />
                <CFormText className="help-block">Please enter member first name</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-PhoneNo">PhoneNo</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="number" value={PhoneNo} className="form-control" id="hf-PhoneNo" placeholder="Enter PhoneNo..." onChange={(e)=> setPhoneNo(e.target.value)} />
                <CFormText className="help-block">Please enter member PhoneNo</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
            <CCol md="1">
                <CLabel htmlFor="hf-Address">Address</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="text" value={Address} className="form-control" id="hf-Address" placeholder="Enter Address..." onChange={(e)=> setAddress(e.target.value)} />
                <CFormText className="help-block">Please enter member Address</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hr-sex">Sex</CLabel>
              </CCol>
              <CCol  md="5">
                <select className="form-control"  ref={dropDown2}>
                  <option value='0'>Select</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
                <CFormText className="help-block">Please select member Sex</CFormText>
              </CCol>
     
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-Email">Email</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="email" value={Email} className="form-control" id="hf-Email" placeholder="Enter Email..." onChange={(e)=> setEmail(e.target.value)} />
                <CFormText className="help-block">Please enter member Email</CFormText>
              </CCol>
           

              <CCol md="1">
                <CLabel htmlFor="date-input">DOB</CLabel>
              </CCol>
              <CCol  md="5">           
                <input type="date" value={Dob?formatDate(Dob):''} className="form-control" id="date-input" name="hr-dob" placeholder="Dob.." onChange={(e)=> setDob(e.target.value)} />
                <CFormText className="help-block">Please enter member Date Of Birth</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-MaritalStatus">Marital Status</CLabel>
              </CCol>
              <CCol  md="5">
                <select className="form-control" ref={dropMe}     >
                  <option value="">Please select</option>
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                  <option value="Divorce">Divorce</option>
                  <option value="Seprated">Seprated</option>
                </select>
                <CFormText className="help-block">Please select member Marital Status</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-Surname">Wedding Anniversary</CLabel>
              </CCol>
              <CCol  md="5">
                <input type="date" value={WeddingAnniversary?formatDate(WeddingAnniversary):''} id="hf-WeddingAnniversary" name="hf-Wedding Anniversary" className="form-control" onChange={(e)=> setWeddingAnniversary(e.target.value)} />
                <CFormText className="help-block">Please enter member Wedding Anniversary</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-Occupation">Occupation</CLabel>
              </CCol>
              <CCol  md="5">
                <input id="hf-Occupation" value={Occupation} className="form-control" name="hf-Occupation" placeholder="Enter Occupation..." onChange={(e)=> setOccupation(e.target.value)} />
                <CFormText className="help-block">Please enter member Occupation</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-Business">Business</CLabel>
              </CCol>
              <CCol  md="5">
                <input className="form-control" value={Business} id="hf-Business" name="hf-Business" placeholder="Enter Business..." onChange={(e)=> setBusiness(e.target.value)}/>
                <CFormText className="help-block">Please enter member Business</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="1">
                <CLabel htmlFor="hf-fName">Expertise</CLabel>
              </CCol>
              <CCol  md="5">
                <input className="form-control" value={Expertise} id="hf-Expertise" name="hf-Expertise" placeholder="Enter Expertise..." onChange={(e)=> setExpertise(e.target.value)} />
                <CFormText className="help-block">Please enter member Expertise</CFormText>
              </CCol>

              <CCol md="1">
                <CLabel htmlFor="hf-DateJoinedTKA">Date Joined TKA</CLabel>
              </CCol>
              <CCol  md="5">
              <input type="date" value={DateJoinedTKA?formatDate(DateJoinedTKA):''} className="form-control" id="date-DateJoinedTKA" name="hr-DateJoinedTKA" placeholder="DateJoinedTKA.." onChange={(e)=> setDateJoinedTKA(e.target.value)} />
                <CFormText className="help-block">Please enter DateJoinedTKA</CFormText>
              </CCol>           
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <button type="button" className="btn btn-primary" onClick={(e)=> submitUpdate(e)}><CIcon name="cil-scrubber"/>update</button>
         
            <ToastContainer/>
        </CCardFooter>
      </CCard>

        </>
    )

}

export default  EditMember


        //     <CCard>
        //     <CCardHeader>
        //     Member <i className="fa fa-expeditedssl" aria-hidden="true"></i>
        //     <small> Form</small>
        //     </CCardHeader>
        //     <CCardBody>
        //         <CForm action="" method="post" className="form-horizontal">
        //             <CFormGroup row>
        //             <CCol md="1">
        //                 <CLabel htmlFor="hf-RegNumber">FirstName</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="text" value={details.FirstName} className="input-xlarge"  onChange={(e)=> setFname(e.target.value)}/>
        //                 <CFormText className="help-block">Set FirstName</CFormText>
        //             </CCol>
        //             <CCol md="1">
        //                 <CLabel htmlFor="Surname">Surname</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="text" value={details.Surname} className="input-xlarge"  onChange={(e)=> seSname(e.target.value)}/>
        //                 <CFormText className="help-block"> SetSurname</CFormText>
        //             </CCol>
        //             </CFormGroup>

        //             <CFormGroup row>
        //             <CCol md="1">
        //                 <CLabel htmlFor="hf-RegNumber">Address</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="text" value={details.Address} className="input-xlarge"  onChange={(e)=> setaddress(e.target.value)} />
        //                 <CFormText className="help-block">Set Address</CFormText>
        //             </CCol>
        //             <CCol md="1">
        //                 <CLabel htmlFor="Surname">PhoneNo</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="number" value={details.PhoneNo} className="input-xlarge" onChange={(e)=> setphone(e.target.value)}/>
        //                 <CFormText className="help-block">PhoneNo</CFormText>
        //             </CCol>
        //             </CFormGroup>

        //             <CFormGroup row>
        //             <CCol md="1">
        //                 <CLabel htmlFor="hf-RegNumber">Sex pls type Male or Female</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="text" value={details.Sex} className="input-xlarge" onChange={(e)=> setsex(e.target.value)} />
        //                 <CFormText className="help-block">Set Sex</CFormText>
        //             </CCol>
        //             <CCol md="1">
        //                 <CLabel htmlFor="Surname">DOB</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="date" value={details.DOB?new Date(details.DOB).toLocaleDateString():''} className="input-xlarge" onChange={(e)=>setdob(e.target.value)}/>
        //                 <CFormText className="help-block"> Set DOB</CFormText>
        //             </CCol>
        //             </CFormGroup>

        //             <CFormGroup row>
        //             <CCol md="1">
        //                 <CLabel htmlFor="hf-RegNumber">MaritalStatus pls type Married or Single </CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="text" value={details.MaritalStatus} className="input-xlarge" onChange={(e)=> setmaristat(e.target.value)}/>
        //                 <CFormText className="help-block">Set MaritalStatus</CFormText>
        //             </CCol>
        //             <CCol md="1">
        //                 <CLabel htmlFor="Surname">WeddingAnniversary</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="date" value={details.WeddingAnniversary?new Date(details.WeddingAnniversary).toLocaleDateString():''} className="input-xlarge" onChange={(e)=> setwedanny(e.target.value)}/>
        //                 <CFormText className="help-block"> Set WeddingAnniversary</CFormText>
        //             </CCol>
        //             </CFormGroup>

        //             <CFormGroup row>
        //             <CCol md="1">
        //                 <CLabel htmlFor="hf-RegNumber">Email</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="email" value={details.Email} className="input-xlarge"  onChange={(e)=> setemail(e.target.value)}/>
        //                 <CFormText className="help-block">Set Email</CFormText>
        //             </CCol>
        //             <CCol md="1">
        //                 <CLabel htmlFor="Surname">Ocupation</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="text" value={details.Ocupation} className="input-xlarge" onChange={(e)=> setocupa(e.target.value)}/>
        //                 <CFormText className="help-block"> Set Ocupation</CFormText>
        //             </CCol>
        //             </CFormGroup>

        //             <CFormGroup row>
        //             <CCol md="1">
        //                 <CLabel htmlFor="hf-RegNumber">Expertise</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="text" value={details.Expertise} className="input-xlarge" onChange={(e)=> setexper(e.target.value)}/>
        //             <CFormText className="help-block"> Set Expertise</CFormText>
        //             </CCol>
        //             <CCol md="1">
        //                 <CLabel htmlFor="Surname">Set Business</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="text" value={details.Business} className="input-xlarge" onChange={(e)=> setbusin(e.target.value)}/>
        //                 <CFormText className="help-block"> Set Business</CFormText>
        //             </CCol>
        //             </CFormGroup>

        //             <CFormGroup row>
        //             <CCol md="1">
        //                 <CLabel htmlFor="hf-RegNumber">DateJoinedTKA</CLabel>
        //             </CCol>
        //             <CCol  md="5">
        //             <input type="date" value={details.DateJoinedTKA?new Date(details.DateJoinedTKA).toLocaleDateString():''} className="input-xlarge" onChange={(e)=> setdatjo(e.target.value)}/>
        //             <CFormText className="help-block"> Set DateJoinedTKA</CFormText>
        //             </CCol>
        //             <CCol md="1">
                    
        //             </CCol>
        //             <CCol  md="5">
                    
        //             </CCol>
        //             </CFormGroup>
        //         </CForm> 
        //         <button type='submit' className="btn btn-primary" onClick={(e)=> submitUpdate(e)}><GiUpgrade/>Update</button>           
        //     </CCardBody>
        //     <ToastContainer/>
        // </CCard>