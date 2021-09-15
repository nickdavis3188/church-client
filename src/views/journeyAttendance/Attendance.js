import React,{useState,useEffect }from "react"
import { useHistory} from 'react-router-dom'
import {
    // CButton,
    CProgress,
    CCol,
    CNav,
    CNavItem,
    CNavLink,
    // CRow,
    CTabContent,
    CTabPane,
    CCard,
    CCardBody,
    CTabs,
    CCardHeader,
    CFormGroup,
    CFormText,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CButton,
    CAlert
} from '@coreui/react';

// import CIcon from '@coreui/icons-react';
import {FaAllergies,FaHistory,FaDatabase} from "react-icons/fa"

// import axios from 'axios';
import baseUrl from '../../config/config'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Attendance = ({match})=>{
    const [active, setActive] = useState(0)
    const [details, setDetails] = useState({
        Firstname:'',
        Surname:'',
        Address:'',
        PhoneNo:'',
        Email:'',
        RegNumber:'',
        Sex:'',
        Dob:'',
        MaritalStatus:'',
        WeddingAnniversary:'',
        Occupation:'',
        Business:'',
        Expertise:'',
        DateJoinedTKA:'',
        journeyAttend:[],
        id:'',
        currentJourney:'',
        nextJourney:''
       
      })
    const [journeyAtt,setJourneyAtt] = useState([])
    const [JourneyAttLeng,setJourneyAttLeng] = useState(0)
//   const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  useEffect(()=>{
    let mydata = JSON.stringify({word:`${match.params.id}`})
    fetch(`${baseUrl}/api/v1/member/getSingleMember`,{
        method: 'POST',
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

                setDetails({
                    Firstname:data.data[0].Firstname?data.data[0].Firstname:"",
                    Surname:data.data[0].Surname?data.data[0].Surname:"",
                    Address:data.data[0].Address?data.data[0].Address:"",
                    PhoneNo:data.data[0].PhoneNo?data.data[0].PhoneNo:"",
                    Email:data.data[0].Email?data.data[0].Email:"",
                    RegNumber:data.data[0].RegNumber?data.data[0].RegNumber:"",
                    Sex:data.data[0].Sex?data.data[0].Sex:"",
                    Dob:data.data[0].Dob?data.data[0].Dob:"",
                    MaritalStatus:data.data[0].MaritalStatus?data.data[0].MaritalStatus:"",
                    WeddingAnniversary:data.data[0].WeddingAnniversary?data.data[0].WeddingAnniversary:"",
                    Occupation:data.data[0].Occupation?data.data[0].Occupation:"",
                    Business:data.data[0].Business?data.data[0].Business:"",
                    Expertise:data.data[0].Expertise?data.data[0].Expertise:"",
                    DateJoinedTKA:data.data[0].DateJoinedTKA?data.data[0].DateJoinedTKA:"",            
                    ImageUrl:data.data[0].ImageUrl?data.data[0].ImageUrl:"",
                    journeyAttend:(data.data[0].journeyAttend.lenght >= 1?data.data[0].journeyAttend:[]),
                    id:data.data[0]._id?data.data[0]._id:"",
                    currentJourney:data.data[0].currentJourney?data.data[0].currentJourney:"",
                    nextJourney:data.data[0].nextJourney?data.data[0].nextJourney:""
                  })
                  if(data.data[0].journeyAttend.length >= 1){
                    setJourneyAttLeng(data.data[0].journeyAttend.length)
                    setJourneyAtt(data.data[0].journeyAttend)
                  }else{
                    setJourneyAtt([])
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
    })
    .catch((err)=>{
        if(err){
        console.log(err) 
        alert(err)
        }
    })
  },[])
    //    e.preventDefault()
    return(
        <>                     
            <CCard>
                <CCardHeader>
                    Member Details
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
                                Firstname={details.Firstname?details.Firstname:""}
                                Surname={details.Surname?details.Surname:""}
                                Address={details.Address?details.Address:""}
                                PhoneNo={details.PhoneNo?details.PhoneNo:""}
                                Email={details.Email?details.Email:""}
                                RegNumber={details.RegNumber?details.RegNumber:""}
                                Sex={details.Sex?details.Sex:""}
                                Dob={details.Dob?new Date(details.Dob).toLocaleDateString():""}
                                MaritalStatus={details.MaritalStatus?details.MaritalStatus:""}
                                WeddingAnniversary={details.WeddingAnniversary?new Date(details.WeddingAnniversary).toLocaleDateString():""}
                                Occupation={details.Occupation?details.Occupation:""}
                                Business={details.Business?details.Business:""}
                                Expertise={details.Expertise?details.Expertise:""}                                                   
                                DateJoinedTKA={details.DateJoinedTKA?new Date(details.DateJoinedTKA).toLocaleDateString():""}                                    
                                ImageUrl={details.ImageUrl?details.ImageUrl:""}
                                id={details.id?details.id:""}
                        />
                        </CTabPane>
                        <CTabPane>
                        {/* {`2. ${lorem}`} */}
                        <JourneyHistry journey3={journeyAtt} journeyLength={JourneyAttLeng}/>
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
                                <h6 className="mb-1">DOB: {props.Dob}</h6>
                            </div>
                          
                            <div className="col-md-7">
                                <h6 className="mb-1">MaritalStatus: {props.MaritalStatus}</h6>
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
                                <h6 className="mb-1">DateJoinedTKA: {props.DateJoinedTKA?new Date(props.DateJoinedTKA).toLocaleDateString():''}</h6>
                            </div>
                           
                       
                        </div>
                        </div>
                        <div className="col">
                            <p className="small mb-0 text-muted">Address: {props.Address}</p>
                            <p className="small mb-0 text-muted">Email: {props.Email}</p>
                            <p className="small mb-0 text-muted">PhoneNo: {props.PhoneNo}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <button className="btn btn-primary" onClick={()=> history.push(`/Members/${props.RegNumber}`)}>Edit</button>
        </div>
    )
}


const JourneyHistry = (props)=>{
    
    // let num = props.journey.length

    return(
        <div style={{overflowX:'auto'}} className="table-responsive-xl">    
        <h5>History</h5>
        <br/>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Journey Name</th>
                    <th scope="col">Journey Priority</th>
                    <th scope="col">Date Attaind</th>       
                </tr>
            </thead>
            <tbody>            
               {props.journey3.map((e,i)=>{
                    return(
                        <tr key={i}>
                            <th scope="row">{e.JourneyId.JourneyName?e.JourneyId.JourneyName:""}</th>
                            <td>{e.JourneyId.JourneyPriority?e.JourneyId.JourneyPriority:""}</td>
                            <td>{e.JourneyDate?new Date(e.JourneyDate).toLocaleDateString():""}</td>
                        </tr>
                )
                })}
                      
            </tbody>
        </table>
        <br/>
        <div className="clearfix">
            <div className="float-left">
                <strong>{20*props.journeyLength}%</strong>
            </div>
            <div className="float-right">
                <small className="text-muted">Journey Progress</small>
            </div>
        </div>
        <CProgress className="progress-xs" color="success" value={20*props.journeyLength} />

        <hr className="my-4" />
    </div>
    )
}

const JourneyAttendance = (props)=>{
    const [dateValue,setDateValue] = useState('')
    const [modal, setModal] = useState(false)
    const [visible, setVisible] = React.useState(0)
    const Attendance22 = (e)=>{

        let dateAttend = JSON.stringify({date:dateValue})
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
                  return toast('successfully Attend')
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
    

    const btnAtt = props.currentJourney.JourneyPriority === 6?<button className=' btn btn-primary disabled' disabled >You are done with your journey</button>:<button className='btn btn-primary' onClick={() => (dateValue?setModal(!modal):setVisible(10))} >Attend</button>


    return(
        <div>
            <CModal 
              show={modal} 
              onClose={setModal}
            >
              <CModalHeader closeButton>
                <CModalTitle>Journey Warning</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Are you sure you have attended {props.currentJourney.JourneyName}?
              </CModalBody>
              <CModalFooter>
              <button className='btn btn-primary' onClick={(e)=>{
                  setModal(false)
                 return Attendance22(e)
                  }}>Proceed...</button>{' '}
                <CButton 
                  color="secondary" 
                  onClick={() => setModal(false)}
                >Cancel</CButton>
              </CModalFooter>
            </CModal>
            <CAlert
                color="warning"
                show={visible}
                closeButton
                onShowChange={setVisible}
              >
                Please insert date attend...
                <CProgress
                  striped
                  color="warning"
                  value={Number(visible) * 10}
                  size="xs"
                  className="mb-3"
                />
              </CAlert>
            <div className="row mb-4">
                <div className="col-md-7">                       
                        <br/>
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h6 className="mb-1">Current Journey: {props.currentJourney.JourneyName}</h6>
                        </div>

                        <br/>

                        <div className="col-md-7">
                            <h6 className="mb-1">Next Journey: {props.nextJourney.JourneyName}</h6>
                        </div>
                    </div>
                    <br/>
                    <CFormGroup row>
                        <CCol  md="6">
                            <input type="date" id="date-input" name="dob" className="form-control" onChange={(e)=>setDateValue(e.target.value)}/>
                            <CFormText className="help-block">Please enter Date Attend </CFormText>
                        </CCol>
                        <CCol  md="6">
                                {btnAtt}
                        </CCol>
                </CFormGroup>
                </div>
            </div>
        </div>
    )
}



export default  Attendance