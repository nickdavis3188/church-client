import React,{useState,useEffect }from "react"
import { useHistory} from 'react-router-dom'
import {
    // CButton,
    CProgress,
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
import './att.css'

const Attendance = ({match,User})=>{
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

        <div className="container rounded bg-white mt-2 mb-2">
            <div className="row">
                <div className="col-md-4 border-right">
                   {
                   User.role === 'admin'? 
                   <DetailsAdmin 
                   Firstname={details.Firstname?details.Firstname:""}
                   Surname={details.Surname?details.Surname:""}
                   Address={details.Address?details.Address:""}
                   PhoneNo={details.PhoneNo?details.PhoneNo:""}
                   Email={details.Email?details.Email:""}
                   RegNumber={details.RegNumber?details.RegNumber:""}
                   Sex={details.Sex?details.Sex:""}
                   Dob={details.Dob?formatDate(details.Dob):""}
                   MaritalStatus={details.MaritalStatus?details.MaritalStatus:""}
                   WeddingAnniversary={details.WeddingAnniversary?new Date(details.WeddingAnniversary).toLocaleDateString():""}
                   Occupation={details.Occupation?details.Occupation:""}
                   Business={details.Business?details.Business:""}
                   Expertise={details.Expertise?details.Expertise:""}                                                   
                   DateJoinedTKA={details.DateJoinedTKA?new Date(details.DateJoinedTKA).toLocaleDateString():""}                                    
                   ImageUrl={details.ImageUrl?details.ImageUrl:""}
                   id={details.id?details.id:""}
                   User={User}
               />:
                <SubAdminDetails 
                    Firstname={details.Firstname?details.Firstname:""}
                    Surname={details.Surname?details.Surname:""}
                    Address={details.Address?details.Address:""}
                    PhoneNo={details.PhoneNo?details.PhoneNo:""}
                    Email={details.Email?details.Email:""}
                    RegNumber={details.RegNumber?details.RegNumber:""}
                    Sex={details.Sex?details.Sex:""}
                                                  
                    ImageUrl={details.ImageUrl?details.ImageUrl:""}
                    id={details.id?details.id:""}
                    User={User}
                />
                }
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                    <CCard>
                        <CCardHeader>
                            Attendance
                        </CCardHeader>
                        <CCardBody>
                            <JourneyAttendance 
                            id={details.id}
                            currentJourney={details.currentJourney}
                            nextJourney={details.nextJourney}
                            />
                        </CCardBody>                    
                    </CCard>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                    <CCard>
                        <CCardHeader>
                            Journey History
                        </CCardHeader>
                        <CCardBody>
                            <JourneyHistry journey3={journeyAtt} journeyLength={JourneyAttLeng}/>
                        </CCardBody>                    
                    </CCard>
                    </div>
                </div>
            </div>
            <ToastContainer/> 
        </div>       
        </>
    )
}


const SubAdminDetails = (props)=>{
 
        let badge = props.Sex === 'Male' ?'badge badge-primary':'badge badge-info'
        return(
            <div className="profile-card-4 z-depth-3">
                <div className="card">
                    <div className="card-body text-center bg-primary rounded-top">
                        <div className="user-box">
                        <img src={props.ImageUrl} alt="user avatar"/>
                    </div>
                    <h5 className="mb-1 text-white">{props.Surname} {props.Firstname}</h5>
                    <p className="small mb-3"><span className={badge}>{props.Sex}</span></p>
               </div>
               <div className="card-body">
                 <ul className="list-group shadow-none">
                 <li className="list-group-item">
                    <div className="list-details">
                        <div className="row text-center mt-4">
                            <div className="col p-2">
                                <small className="mb-1 line-height-5">RegNumber:</small>
                            </div>
                            <div className="col p-2">
                                <small className="mb-1 line-height-5">{props.RegNumber}</small>
                            </div>
                        </div> 
                        <div className="row text-center mt-4">
                            <div className="col p-2">
                                <small className="mb-1 line-height-5">Email:</small>
                            </div>
                            <div className="col p-2">
                                <small className="mb-1 line-height-5">{props.Email}</small>
                            </div>
                        </div>
                        <div className="row text-center mt-4">
                            <div className="col p-2">
                                <small className="mb-1 line-height-5">Address:</small>
                            </div>
                            <div className="col p-2">
                                <small className="mb-1 line-height-5">{props.Address}</small>
                            </div>
                        </div>
                        <div className="row text-center mt-4">
                            <div className="col p-2">
                                <small className="mb-1 line-height-5">PhoneNo:</small>
                            </div>
                            <div className="col p-2">
                                <small className="mb-1 line-height-5">{props.PhoneNo}</small>
                            </div>
                        </div>                
                   </div>
                 </li>               
                 </ul>
                </div>
               
            </div>
        </div>
    )
}
const DetailsAdmin =(props)=>{
    const btnEdit = props.User.role === 'admin'?<button className="btn btn-primary" onClick={()=> history.push(`/Members/${props.RegNumber}`)}>Edit</button>:<button className=' btn btn-primary disabled' disabled >Edit</button>
    const history = useHistory()
    let badge = props.Sex === 'Male' ?'badge badge-primary':'badge badge-info'
    return(
        <div className="profile-card-4 z-depth-3">
            <div className="card">
                <div className="card-body text-center bg-primary rounded-top">
                    <div className="user-box">
                    <img src={props.ImageUrl} alt="user avatar"/>
                </div>
                <h5 className="mb-1 text-white">{props.Surname} {props.Firstname}</h5>
                <p className="small mb-3"><span className={badge}>{props.Sex}</span></p>
           </div>
           <div className="card-body">
             <ul className="list-group shadow-none">
             <li className="list-group-item">
                <div className="list-details">
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">RegNumber:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.RegNumber}</small>
                        </div>
                    </div>  
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">Email:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.Email}</small>
                        </div>
                    </div> 
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">Address:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.Address}</small>
                        </div>
                    </div> 
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">PhoneNo:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.PhoneNo}</small>
                        </div>
                    </div>  
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">DOB:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.Dob?`${new Date(props.Dob).getDate()}/${new Date(props.Dob).getMonth() + 1}`:''}</small>
                        </div>
                    </div> 
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">MaritalStatus:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.MaritalStatus}</small>
                        </div>
                    </div> 
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">Wedding Anniversary:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.WeddingAnniversary}</small>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">Occupation:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.Occupation}</small>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">Occupation:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.Occupation}</small>
                        </div>
                    </div> 
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">Business:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.Business}</small>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">Expertise:</small>
                        </div>
                        <div className="col p-2">
                            <small className="mb-1 line-height-5">{props.Expertise}</small>
                        </div>
                    </div>             
               </div>
             </li>
             </ul>
            </div>
            {btnEdit}
        </div>
    </div>
    )
}

const JourneyHistry = (props)=>{
    
    // let num = props.journey.length

    return(
        <div style={{overflowX:'auto'}} className="table-responsive-xl">    
       
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
    
    const [modal, setModal] = useState(false)
    const [visible, setVisible] = React.useState(0)
    const Attendance22 = (e)=>{

        let dateAttend = JSON.stringify({id:props.id})
        fetch(`${baseUrl}/api/v1/member/attendance`,{
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
    const CheckDate = (e)=>{
        fetch(`${baseUrl}/api/v1/journeyDate/checkJourneyDate`,{
            method: 'GET'
        })
        .then((res)=>res.json())
        .then((data)=>{ 
            console.log(data)
            if(data){
                if(data.status === 'success'){ 
                    setModal(!modal)      
                }else{
                    if(data.status === 'not found'){
                        setVisible(10)                
                    }else{
                        if(data.status === 'fail'){
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
    //   (dateValue?setModal(!modal):setVisible(10))
    const btnAtt = props.currentJourney.JourneyPriority === 6?<button className=' btn btn-primary disabled' disabled >You are done with your journey</button>:<button className='btn btn-primary' onClick={(e) => CheckDate(e)} >Attend</button>


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
                Journey Date Not Set...
                <CProgress
                  striped
                  color="warning"
                  value={Number(visible) * 10}
                  size="xs"
                  className="mb-3"
                />
              </CAlert>
            <div> 
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Current Journey</th>
                                <th scope="col">Next Journey</th>                                              
                            </tr>
                        </thead>
                        <tbody>                                                  
                            <tr>
                                <th scope="row">{props.currentJourney.JourneyName}</th>
                                <td>{props.nextJourney.JourneyName}</td>
                            </tr>                                    
                        </tbody>
                    </table>
                </div>
                  
                <br/>
                <CFormGroup row>
                    <CCol  md="6">
                            {btnAtt}
                    </CCol>
                </CFormGroup>
           
            </div>
           
        </div>
    )
}



export default  Attendance