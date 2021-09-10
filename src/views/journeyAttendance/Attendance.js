import React,{useState,useEffect }from "react"
import { useHistory, useLocation } from 'react-router-dom'
import {
    // CButton,
    CProgress,
    CCardFooter,
    CCol,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTabPane,
    CCard,
    CCardBody,
    CTabs,
    CCardHeader,
    CFormGroup,
    CFormText
} from '@coreui/react';

// import CIcon from '@coreui/icons-react';
import {FaAllergies,FaHistory,FaDatabase,FaSearch} from "react-icons/fa"

// import axios from 'axios';
import baseUrl from '../../config/config'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Attendance = ({match})=>{
    const [active, setActive] = useState(0)
    const [details, setDetails] = useState({
        FirstName:'',
        Surname:'',
        Address:'',
        PhoneNo:'',
        Email:'',
        RegNumber:'',
        Sex:'',
        DOB:'',
        MaritalStatus:'',
        WeddingAnniversary:'',
        Ocupation:'',
        Business:'',
        Expertise:'',
        DateJoinedTKA:'',
        journeyAttend:'',
        id:'',
        currentJourney:'',
        nextJourney:''
       
      })
    
//   const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  useEffect(()=>{
    let mydata = JSON.stringify({word:`${match.params.id}`})
    fetch(`${baseUrl}/api/v1/member/getSingleMember`,{
        method: 'GET',
        body:mydata,
        headers:{
          "Content-Type":"application/json",
            // 'Content-Type': 'multipart/form-data'
        }
    
    })
    .then((res)=>res.json())
    .then((data)=>{ 
        if(data){
            if(data.status === 'success'){
                console.log(data.data[0].journeyAttend?data.data[0].journeyAttend:"")
                setDetails({
                    FirstName:data.data[0].FirstName?data.data[0].FirstName:"",
                    Surname:data.data[0].Surname?data.data[0].Surname:"",
                    Address:data.data[0].Address?data.data[0].Address:"",
                    PhoneNo:data.data[0].PhoneNo?data.data[0].PhoneNo:"",
                    Email:data.data[0].Email?data.data[0].Email:"",
                    RegNumber:data.data[0].RegNumber?data.data[0].RegNumber:"",
                    Sex:data.data[0].Sex?data.data[0].Sex:"",
                    DOB:data.data[0].DOB?data.data[0].DOB:"",
                    MaritalStatus:data.data[0].MaritalStatus?data.data[0].MaritalStatus:"",
                    WeddingAnniversary:data.data[0].WeddingAnniversary?data.data.WeddingAnniversary:"",
                    Ocupation:data.data[0].Ocupation?data.data[0].Ocupation:"",
                    Business:data.data[0].Business?data.data[0].Business:"",
                    Expertise:data.data[0].Expertise?data.data[0].Expertise:"",
                    DateJoinedTKA:data.data[0].DateJoinedTKA?data.data[0].DateJoinedTKA:"",            
                    ImageUrl:data.data[0].ImageUrl?data.data[0].ImageUrl:"",
                    journeyAttend:data.data[0].journeyAttend?data.data[0].journeyAttend:"",
                    id:data.data[0]._id?data.data[0]._id:"",
                    currentJourney:data.data[0].currentJourney?data.data[0].currentJourney:"",
                    nextJourney:data.data[0].nextJourney?data.data[0].nextJourney:""
                  })
                  
              return toast('successful')
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
  })
    //    e.preventDefault()
    return(
        <>
            <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">            
                    <CCard>
                        <CCardHeader>
                            Controlled tabs
                        </CCardHeader>
                        <CCardBody>
                            <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>
                            <CNav variant="tabs">
                                <CNavItem>
                                <CNavLink>
                                    <FaDatabase/>
                                    { active === 0 && ' Member Details'}
                                </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                <CNavLink>
                                    <FaHistory/>
                                    { active === 1 && 'Journey History'}
                                </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                <CNavLink>
                                    <FaAllergies/>
                                    { active === 2 && 'Journey Attendance'}
                                </CNavLink>
                                </CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane>
                                    <UserDetails 
                                        FirstName={details.FirstName?details.FirstName:""}
                                        Surname={details.Surname?details.Surname:""}
                                        Address={details.Address?details.Address:""}
                                        PhoneNo={details.PhoneNo?details.PhoneNo:""}
                                        Email={details.Email?details.Email:""}
                                        RegNumber={details.RegNumber?details.RegNumber:""}
                                        Sex={details.Sex?details.Sex:""}
                                        DOB={details.DOB?new Date(details.DOB).toLocaleDateString():""}
                                        MaritalStatus={details.MaritalStatus?details.MaritalStatus:""}
                                        WeddingAnniversary={details.WeddingAnniversary?new Date(details.WeddingAnniversary).toLocaleDateString():""}
                                        Ocupation={details.Ocupation?details.Ocupation:""}
                                        Business={details.Business?details.Business:""}
                                        Expertise={details.Expertise?details.Expertise:""}                                                   
                                        DateJoinedTKA={details.DateJoinedTKA?new Date(details.DateJoinedTKA).toLocaleDateString():""}                                    
                                        ImageUrl={details.ImageUrl?details.ImageUrl:""}
                                        id={details.id?details.id:""}
                                />
                                </CTabPane>
                                <CTabPane>
                                {/* {`2. ${lorem}`} */}
                                {/* <JourneyHistry journey={details.journeyAttend} /> */}
                                </CTabPane>
                                <CTabPane>
                                {/* {`3. ${lorem}`} */}
                                <JourneyAttendance 
                                    id={details.id}
                                    currentJourney={details.currentJourney}
                                    nextJourney={details.nextJourney}
                                    />
                                </CTabPane>
                            </CTabContent>
                            </CTabs>
                        </CCardBody>                    
                    </CCard>   
                    <ToastContainer/>      
                </div>
            </div>
        </>
    )
}

const UserDetails = (props)=>{
    const history = useHistory()
    let badge = props.Sex === 'male' ?'badge badge-primary':'badge badge-info'
    return(
        <div>
            <div className="row mt-5 align-items-center">
            <div className="col-md-3 text-center mb-5">
                <div className="avatar avatar-xl">
                    <img src={props.ImageUrl} alt="..." className="avatar-img rounded-circle"style={{width:'200px'}} />
                </div>
            </div>
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h4 className="mb-1">{props.Surname}, {props.Firstname}</h4>
                            <p className="small mb-3"><span className={badge}>{props.Sex}</span></p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-7">
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <h6 className="mb-1">RegNumber: {props.RegNumber}</h6>
                            </div>
                            <div className="col-md-7">
                                <h6 className="mb-1">Status: {props.Statusp}</h6>
                            </div>
                            <div className="col-md-7">
                                <h6 className="mb-1">DOB: {props.DOB}</h6>
                            </div>
                          
                            <div className="col-md-7">
                                <h6 className="mb-1">WeddingAnniversary: {props.WeddingAnniversary}</h6>
                            </div>
                            <div className="col-md-7">
                                <h6 className="mb-1">Occupation: {props.Occupation}</h6>
                            </div>
                            <div className="col-md-7">
                                <h6 className="mb-1">Business: {props.Business}</h6>
                            </div>
                            <div className="col-md-7">
                                <h6 className="mb-1">Expertise: {props.Expertise}</h6>
                            </div>
                         
                            <div className="col-md-7">
                                <h6 className="mb-1">DateJoinedTKA: {props.DateJoinedTKA}</h6>
                            </div>
                           
                       
                        </div>
                        </div>
                        <div className="col">
                            <p className="small mb-0 text-muted">{props.Address}</p>
                            <p className="small mb-0 text-muted">{props.Email}</p>
                            <p className="small mb-0 text-muted">{props.PhoneNo}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <button class="btn btn-primary" onClick={()=> history.push(`/Member/${props.id}`)}>Edit</button>
        </div>
    )
}


const JourneyHistry = (props)=>{
    
    let num = props.journey.length

    const checkPecent = (p)=>{
        let result;
        switch (p) {
            case 0:
                result = 0
                break;
            case 1:
            result = 20
                break;
            case 2:
            result = 40
                break;
            case 3:
            result = 60
                break;
        
            case 4:
            result = 80
                break;
        
            case 5:
            result = 100
                break; 
            default:
                return 
        }
        return result
    } 

    
    return(
        <div style={{overflowX:'auto', maxHeight:'300px'}} class="table-responsive-xl">    
        <h5>History</h5>
        <table className="table table-hover">
            <thead className="thead-light">
                <tr>
                <th scope="col">Journey Name</th>
                <th scope="col">Journey Priority</th>
                <th scope="col">Date Attaind</th>       
                </tr>
            </thead>
            <tbody>
                {props.journey.map((e,i)=>{
                    return(
                    <tr key={i}>
                        <th scope="row">{e.JourneyId.JourneyName?e.JourneyId.JourneyName:""}</th>
                        <td>{e.JourneyId.JourneyPriority?e.JourneyId.JourneyPriority:""}</td>
                        <td>{e.JourneyDate?new Date(e.JourneyDate).toLocaleDateString():""}</td>
                    </tr>)
                })}
                
            </tbody>
        </table>
        <div className="clearfix">
            <div className="float-left">
                <strong>{checkPecent(num)}%</strong>
            </div>
            <div className="float-right">
                <small className="text-muted">Journey Progress</small>
            </div>
        </div>
        <CProgress className="progress-xs" color="success" value={checkPecent(num)} />

        <hr className="my-4" />
    </div>
    )
}

const JourneyAttendance = (props)=>{
    const [dateValue,setDateValue] = useState('')
    const Attendance22 = (e)=>{

        let dateAttend = JSON.stringify(dateValue)
        fetch(`${baseUrl}/api/v1/member/attendance/${props.id}`,{
            method: 'POST',
            body:dateAttend,
            headers:{
              "Content-Type":"application/json",
            }
        })
        .then((res)=>res.json())
        .then((data)=>{ 
            console.log(data)
            if(data){
                if(data.status === 'success'){       
                  return toast('successful')
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
        <div>
            <div className="row mb-4">
                <div className="col-md-7">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h6 className="mb-1">Current Journey: {props.currentJourney.JourneyName}</h6>
                        </div>

                        <div className="col-md-7">
                            <h6 className="mb-1">Next Journey: {props.nextJourney.JourneyName}</h6>
                        </div>
                    </div>
                    <CFormGroup row>
                        <CCol  md="6">
                            <input type="date" id="date-input" name="dob" className="form-control" onChange={(e)=>setDateValue(e.target.value)}/>
                            <CFormText className="help-block">Please enter Date Attend </CFormText>
                        </CCol>
                        <CCol  md="6">
                                <button class="btn btn-primary" onClick={(e)=>Attendance22(e)}>Attend</button>
                        </CCol>
                </CFormGroup>
                </div>
            </div>
        </div>
    )
}



export default  Attendance